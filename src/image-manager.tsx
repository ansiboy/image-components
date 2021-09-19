import ImageThumber from './image-thumber';
import React = require('react');
import ReactDOM = require('react-dom');
import { ImageService } from "./services/image-service";
import { getStrings } from "./strings";
import { DataSource, formatString } from "maishu-toolkit";

import "../content/image-manager.less";
import { DataSourceDialog, DataSourceDialogContext } from './dialogs/data-source-dialog';
import ImageSelector from './image-selector';

let strings = getStrings();
type SiteImageData = {
    id: string, width?: number, height?: number,
    data?: string,
}

type State = {
    // images: SiteImageData[],
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

        this.dataSource = createImageDataSource();
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
                    let index = args.index;
                    let isLast = index >= (this.dialog?.state.items || []).length - 1;
                    let imageThumber = <ImageThumber<{ id: string }> key={`${dataItem.id}`} id={dataItem.id} imagePath={ImageService.imageSource(dataItem.id, 120, 120)}
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

                        }} />;

                    return isLast ? <>
                        {imageThumber}
                        <ImageSelector saveImage={async e => {
                            this.dataSource.insert({ data: e.base64 } as SiteImageData);
                        }} />
                    </> : imageThumber;
                }}
            </DataSourceDialogContext.Consumer>
        </DataSourceDialog>
    }
}


let imageManager: ImageManager;
function getImageManager() {
    if (imageManager)
        return imageManager;

    let element = document.createElement("div");
    element.className = "image-manager";
    document.body.append(element);
    imageManager = ReactDOM.render(<ImageManager />, element) as any;
    return imageManager;
}

export default {

    show(callback?: (imageIds: string[]) => void) {
        let instance = getImageManager();
        instance.show(undefined, callback);
    }


}

export function showImageDialog(maxImagesCount: number, callback: (imageIds: string[]) => void): void
export function showImageDialog(callback: (imageIds: string[]) => void): void
export function showImageDialog(maxImagesCount: any, callback?: any) {
    if (typeof maxImagesCount == 'function') {
        callback = maxImagesCount;
        maxImagesCount = null;
    }
    let instance = getImageManager();
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
            console.assert(item.data != null);
            if (!item.data)
                throw new Error("Data is null");

            let result = await station.upload(item.data);
            Object.assign(item, result);
            return result;
        }
    })

    return dataSource;
}