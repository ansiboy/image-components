import ImageThumber from './image-thumber';
import React = require('react');
import ReactDOM = require('react-dom');
import { ImageService } from "./image-service";
import { getStrings } from "./strings";
import { DataSource, formatString } from "maishu-toolkit";

import "../content/image-manager.less";
import { DataSourceDialog, DataSourceDialogContext } from './dialogs/data-source-dialog';

let strings = getStrings();
type SiteImageData = {
    id: string, width?: number, height?: number
}

type State = {
    images: SiteImageData[],
    selectedMax?: number
}

type Props = { title?: string } & React.ClassAttributes<ImageManager>;
class ImageManager extends React.Component<Props, State> {

    private dataSource: DataSource<SiteImageData>;
    private dialog: DataSourceDialog<SiteImageData> | null;
    private selectedItems: ImageThumber<{ id: string }>[] = [];
    private showCallback: ((imageIds: string[]) => void) | undefined;
    private selectedMax?: number;

    constructor(props: Props) {
        super(props);

        this.state = { images: [] };
        this.dataSource = createImageDataSource();
        this.dataSource.selected.add(args => {
            this.setState({ images: args.selectResult.dataItems })
        })
        this.dataSource.inserted.add(args => {
            this.state.images.push(args.dataItem);
            this.setState({ images: this.state.images })
        })
    }

    show(selectedMax?: number, callback?: (imageIds: string[]) => void) {
        this.selectedMax = selectedMax;
        this.showCallback = callback;
        this.selectedItems = [];
        this.dialog?.show();
    }

    async saveImage(data: string) {
        this.dataSource.insert({ data } as any);
    }

    removeImage(item: { id: string }): any {
        this.dataSource.delete(item);
        let images = this.state.images;
        images = images.filter(o => o.id != item.id);
        this.setState({ images });
    }

    private onConfirm() {
        if (this.showCallback) {
            let imageIds = this.selectedItems.map(o => o.props.imagePath);
            this.showCallback(imageIds);
        }
        this.dialog?.hide();
    }

    componentDidMount() {
        let footerElement = this.dialog?.element.querySelector(".modal-footer") as HTMLElement;
        let cancelElement = this.dialog?.element.querySelector(".btn-default") as HTMLElement;
        let tipsElement = document.createElement("div");
        tipsElement.style.float = "left";

        footerElement.insertBefore(tipsElement, cancelElement);
        if (this.selectedMax) {
            tipsElement.innerHTML = formatString(strings.imageSelectMax);
        }
    }

    render() {
        let props = this.props;
        return <DataSourceDialog<SiteImageData> dataSource={this.dataSource} pageItemsCount={17} isLarge={true}
            title={props.title} onConfirm={() => this.onConfirm()}
            ref={e => this.dialog = e || this.dialog}>
            <DataSourceDialogContext.Consumer>
                {args => {
                    let dataItem = args.dataItem as SiteImageData;
                    return <ImageThumber<{ id: string }> key={`${dataItem.id}`} id={dataItem.id} imagePath={ImageService.imageSource(dataItem.id, 120, 120)}
                        onClick={e => {
                            let selecteIds = this.selectedItems.map(o => o.props.id);
                            let exists = selecteIds.indexOf(dataItem.id) >= 0;
                            if (exists) {
                                this.selectedItems = this.selectedItems.filter(o => o.props.id != dataItem.id);
                                e.setState({ selectedText: "" });
                            }
                            else {
                                this.selectedItems.push(e as ImageThumber<{ id: string }>);
                            }

                            for (let i = 0; i < this.selectedItems.length; i++) {
                                this.selectedItems[i].setState({ selectedText: `${i + 1}` });
                            }

                        }} />
                }}
            </DataSourceDialogContext.Consumer>
        </DataSourceDialog>
    }
}

let element = document.createElement("div");
element.className = "image-manager";
document.body.append(element);
let instance: ImageManager = ReactDOM.render(<ImageManager />, element) as any;

export default {
    show(callback?: (imageIds: string[]) => void) {
        instance.show(undefined, callback);
    }
}

export function showImageDialog(maxImagesCount: number, callback: (imageIds: string[]) => void): void
export function showImageDialog(callback: (imageIds: string[]) => void): void
export function showImageDialog(maxImagesCount: any, callback?: any) {
    if (typeof maxImagesCount == 'function') {
        maxImagesCount = null
        callback = maxImagesCount
    }
    instance.show(maxImagesCount, callback)
}

function createImageDataSource() {
    let station = new ImageService();

    let dataSource = new DataSource<SiteImageData>({
        primaryKeys: ['id'],
        async select(args) {
            let result = await station.list(args);//, 140, 140
            return result;
        },
        async delete(item) {
            let result = await station.remove(item.id);
            return result;
        },
        async insert(item) {
            console.assert((item as any).data != null);
            let result = await station.upload((item as any).data);
            Object.assign(item, result);
            return result;
        }
    })

    return dataSource;
}