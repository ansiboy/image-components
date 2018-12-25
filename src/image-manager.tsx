import ImageUpload from './image-upload';
import ImageThumber from './image-thumber';
import * as wuzhui from 'maishu-wuzhui';
import React = require('react');
import ReactDOM = require('react-dom');
import service from 'service';
import { createDialogElement } from 'common';


requirejs(['less!image-manager']);

type State = {
    images: SiteImageData[],
    selectedItems: string[],
    selectedMax?: number
}

type Props = { element: HTMLElement } & React.Props<ImageManager>;//station: StationService 
class ImageManager extends React.Component<Props, State> {

    private showDialogCallback: (imageIds: string[]) => void;
    private dataSource: wuzhui.DataSource<SiteImageData>;
    private pagingBarElement: HTMLElement;
    // private element: HTMLElement;

    constructor(props) {
        super(props);

        this.state = { images: [], selectedItems: [] };
    }

    async componentDidMount() {
        let station = service;
        // station.error.add((sender, err) => app.error.fire(app, err, app.currentPage));

        let self = this;
        let dataSource = this.dataSource = new wuzhui.DataSource<SiteImageData>({
            primaryKeys: ['id'],
            async select(args) {
                let result = await station.images(args, 140, 140);
                // self.state.images = result.dataItems;
                self.setState({ images: result.dataItems })
                self.setState(self.state);
                return result;
            },
            async delete(item) {
                let result = await station.removeImage(item.id);
                // self.state.images = self.state.images.filter(o => o.id != item.id);
                self.setState({ images: self.state.images.filter(o => o.id != item.id) })
                self.setState(self.state);
                return result;
            },
            async insert(item) {
                console.assert((item as any).data != null);
                let result = await station.saveImage((item as any).data);
                // item.id = result.id;
                Object.assign(item, result);
                self.state.images.unshift(item);
                self.setState(self.state);
                return result;
            }
        })

        let pagingBar = new wuzhui.NumberPagingBar({
            dataSource: dataSource,
            element: this.pagingBarElement,
            pagerSettings: {
                activeButtonClassName: 'active',
                buttonWrapper: 'li',
                buttonContainerWraper: 'ul',
                showTotal: false
            },
        });

        let ul = this.pagingBarElement.querySelector('ul');
        ul.className = "pagination";

        // dataSource.selectArguments.maximumRows = 17;
        // dataSource.select();
    }

    show(selectedMax: number, callback?: (imageIds: string[]) => void) {
        this.showDialogCallback = callback;
        // this.state.selectedItems = [];
        // this.setState(this.state);
        this.setState({ selectedItems: [], selectedMax })

        ui.showDialog(this.props.element);
    }

    async saveImage(data: string) {
        this.dataSource.insert({ data } as any);
    }

    removeImage(item: { id: string }): any {
        this.dataSource.delete(item);
    }

    render() {
        let { images, selectedItems, selectedMax } = this.state;
        let element = this.props.element;
        return (
            // <div className="image-manager modal fade" ref={(e: HTMLElement) => this.element = e || this.element}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close"
                            onClick={() => ui.hideDialog(element)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="modal-title">选择图片</h4>
                    </div>
                    <div className="modal-body">
                        {images.map((o, i) => {
                            let selectedText = selectedItems.indexOf(o.id) >= 0 ? `${selectedItems.indexOf(o.id) + 1}` : ''
                            let selectedAll = selectedItems.length == selectedMax
                            let thumber = <ImageThumber key={o.id} imagePath={o.id} width={120} height={120}
                                remove={(imagePath: string) => this.removeImage(o)}
                                badgeText={1}
                                disabled={selectedAll && !selectedText}
                                text={o.width != null && o.height != null ? `${o.width} X ${o.height}` : " "}
                            // onClick={() => {
                            //     let selectedItems: string[] = this.state.selectedItems
                            //     if (selectedItems.indexOf(o.id) >= 0) {
                            //         selectedItems = selectedItems.filter(c => c != o.id);
                            //     }
                            //     else {
                            //         if (selectedItems.length == selectedMax)
                            //             return

                            //         selectedItems.push(o.id);
                            //     }
                            //     this.setState({ selectedItems });
                            // }}
                            />

                            return thumber;
                        })}
                        <ImageUpload className="col-xs-2" saveImage={(data) => this.saveImage(data.base64)}
                            width={400} />
                        <div className="clearfix" />
                    </div>
                    <div className="modal-footer">
                        <div className="pull-left"
                            ref={(e: HTMLElement) => this.pagingBarElement = e || this.pagingBarElement}>
                        </div>
                        {selectedMax ? <div className="pull-left" style={{ paddingTop: 8, paddingLeft: 10 }}>
                            最多可选<b style={{ padding: '0 2px 0 2px' }}>{selectedMax}</b>张</div> : null}
                        <button name="cancel" type="button" className="btn btn-default"
                            onClick={() => ui.hideDialog(element)}>
                            取消
                            </button>
                        <button name="ok" type="button" className="btn btn-primary"
                            onClick={() => {
                                if (this.showDialogCallback) {
                                    let imageIds = this.state.selectedItems.map(o => o);
                                    this.showDialogCallback(imageIds);
                                }
                                ui.hideDialog(element);
                            }}>
                            确定
                        </button>
                    </div>
                </div>
            </div>
            // </div>
        )
    }
}

let element = createDialogElement('image-manager');

let instance: ImageManager = ReactDOM.render(<ImageManager element={element} />, element) as any;

export default {
    show(callback?: (imageIds: string[]) => void) {
        instance.show(null, callback);
    }
}

export function showImageDialog(maxImagesCount: number, callback: (imageIds: string[]) => void)
export function showImageDialog(callback: (imageIds: string[]) => void)
export function showImageDialog(maxImagesCount: any, callback?: any) {
    if (typeof maxImagesCount == 'function') {
        maxImagesCount = null
        callback = maxImagesCount
    }
    instance.show(maxImagesCount, callback)
}