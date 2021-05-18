import ImageUpload from './image-upload';
import ImageThumber from './image-thumber';
// import * as wuzhui from 'maishu-wuzhui-helper';
import React = require('react');
import ReactDOM = require('react-dom');
import { createDialogElement } from './common';
import * as ui from "maishu-ui-toolkit";
// import { DataSourceSelectArguments } from 'maishu-wuzhui-helper';
import { ImageService } from "./image-service";
import { getStrings } from "./strings";
import { DataSource, DataSourceSelectArguments } from "maishu-toolkit";

import "../content/image-manager.less";
import { DataSourcePagingBar } from './number-paging-bar';

let strings = getStrings();
type SiteImageData = {
    id: string, width?: number, height?: number
}

type State = {
    images: SiteImageData[],
    selectedItems: string[],
    selectedMax?: number
}

type Props = { element: HTMLElement } & React.Props<ImageManager>;
class ImageManager extends React.Component<Props, State> {

    private showDialogCallback: ((imageIds: string[]) => void) | undefined;
    private dataSource: DataSource<SiteImageData>;
    private pagingBarElement: HTMLElement;
    private selectArguments: DataSourceSelectArguments;
    private imageService: ImageService;

    constructor(props: Props) {
        super(props);

        this.state = { images: [], selectedItems: [] };
        this.selectArguments = { maximumRows: 17 };
        this.dataSource = createImageDataSource();
        this.dataSource.selected.add(args => {
            this.setState({ images: args.selectResult.dataItems })
        })
        this.dataSource.inserted.add(args => {
            this.state.images.push(args.dataItem);
            this.setState({ images: this.state.images })
        })
        this.imageService = new ImageService();
    }

    async componentDidMount() {

        new DataSourcePagingBar({
            dataSource: this.dataSource,
            element: this.pagingBarElement,
            pagerSettings: {
                activeButtonClassName: 'active',
                buttonWrapper: 'li',
                buttonContainerWraper: 'ul',
                showTotal: false
            },
        });

        let ul = this.pagingBarElement.querySelector('ul');
        if (ul)
            ul.className = "pagination";

    }

    show(selectedMax: number | undefined, callback?: (imageIds: string[]) => void) {
        this.showDialogCallback = callback;
        this.selectArguments.startRowIndex = 0;
        this.dataSource.select(this.selectArguments);

        this.setState({ selectedItems: [], selectedMax })
        ui.showDialog(this.props.element);
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

    render() {
        let { images, selectedItems, selectedMax } = this.state;
        let element = this.props.element;
        return (
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn close"
                            onClick={() => ui.hideDialog(element)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="modal-title">{strings.selectImage}</h4>
                    </div>
                    <div className="modal-body">
                        {images.map((o) => {
                            let selectedText = selectedItems.indexOf(o.id) >= 0 ? `${selectedItems.indexOf(o.id) + 1}` : ''
                            let selectedAll = selectedItems.length == selectedMax
                            let thumber = <ImageThumber key={o.id} imagePath={this.imageService.imageSource(o.id, 150, 150)}
                                remove={() => this.removeImage(o)}
                                selectedText={selectedText}
                                disabled={selectedAll && !selectedText}
                                text={o.width != null && o.height != null ? `${o.width} X ${o.height}` : " "}
                                onClick={() => {
                                    let selectedItems: string[] = this.state.selectedItems
                                    if (selectedItems.indexOf(o.id) >= 0) {
                                        selectedItems = selectedItems.filter(c => c != o.id);
                                    }
                                    else {
                                        if (selectedItems.length == selectedMax)
                                            return

                                        selectedItems.push(o.id);
                                    }
                                    this.setState({ selectedItems });
                                }} />

                            return thumber;
                        })}
                        <ImageUpload saveImage={(data) => this.saveImage(data.base64)}
                            width={400} />
                        <div className="clearfix" />
                    </div>
                    <div className="modal-footer">
                        <div className="pull-left"
                            ref={(e) => this.pagingBarElement = e || this.pagingBarElement}>
                        </div>
                        {selectedMax ? <div className="pull-left" style={{ paddingTop: 8, paddingLeft: 10 }}>
                            {strings.selectMax}<b style={{ padding: '0 2px 0 2px' }}>{selectedMax}</b>张</div> : null}
                        <button name="cancel" type="button" className="btn btn-default"
                            onClick={() => ui.hideDialog(element)}>
                            {strings.cancel}
                        </button>
                        <button name="ok" type="button" className="btn btn-primary"
                            disabled={selectedItems.length == 0}
                            onClick={() => {
                                if (this.showDialogCallback) {
                                    let imageIds = this.state.selectedItems.map(o => o);
                                    this.showDialogCallback(imageIds);
                                }
                                ui.hideDialog(element);
                            }}>
                            {strings.confirm}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

let element = createDialogElement('image-manager');

let instance: ImageManager = ReactDOM.render(<ImageManager element={element} />, element) as any;

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