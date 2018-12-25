var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "./image-upload", "./image-thumber", "maishu-wuzhui", "react", "react-dom", "service", "common"], function (require, exports, image_upload_1, image_thumber_1, wuzhui, React, ReactDOM, service_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    requirejs(['less!image-manager']);
    class ImageManager extends React.Component {
        // private element: HTMLElement;
        constructor(props) {
            super(props);
            this.state = { images: [], selectedItems: [] };
        }
        componentDidMount() {
            return __awaiter(this, void 0, void 0, function* () {
                let station = service_1.default;
                // station.error.add((sender, err) => app.error.fire(app, err, app.currentPage));
                let self = this;
                let dataSource = this.dataSource = new wuzhui.DataSource({
                    primaryKeys: ['id'],
                    select(args) {
                        return __awaiter(this, void 0, void 0, function* () {
                            let result = yield station.images(args, 140, 140);
                            // self.state.images = result.dataItems;
                            self.setState({ images: result.dataItems });
                            self.setState(self.state);
                            return result;
                        });
                    },
                    delete(item) {
                        return __awaiter(this, void 0, void 0, function* () {
                            let result = yield station.removeImage(item.id);
                            // self.state.images = self.state.images.filter(o => o.id != item.id);
                            self.setState({ images: self.state.images.filter(o => o.id != item.id) });
                            self.setState(self.state);
                            return result;
                        });
                    },
                    insert(item) {
                        return __awaiter(this, void 0, void 0, function* () {
                            console.assert(item.data != null);
                            let result = yield station.saveImage(item.data);
                            // item.id = result.id;
                            Object.assign(item, result);
                            self.state.images.unshift(item);
                            self.setState(self.state);
                            return result;
                        });
                    }
                });
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
            });
        }
        show(selectedMax, callback) {
            this.showDialogCallback = callback;
            // this.state.selectedItems = [];
            // this.setState(this.state);
            this.setState({ selectedItems: [], selectedMax });
            ui.showDialog(this.props.element);
        }
        saveImage(data) {
            return __awaiter(this, void 0, void 0, function* () {
                this.dataSource.insert({ data });
            });
        }
        removeImage(item) {
            this.dataSource.delete(item);
        }
        render() {
            let { images, selectedItems, selectedMax } = this.state;
            let element = this.props.element;
            return (
            // <div className="image-manager modal fade" ref={(e: HTMLElement) => this.element = e || this.element}>
            React.createElement("div", { className: "modal-dialog modal-lg" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-header" },
                        React.createElement("button", { type: "button", className: "close", onClick: () => ui.hideDialog(element) },
                            React.createElement("span", { "aria-hidden": "true" }, "\u00D7")),
                        React.createElement("h4", { className: "modal-title" }, "\u9009\u62E9\u56FE\u7247")),
                    React.createElement("div", { className: "modal-body" },
                        images.map((o, i) => {
                            let selectedText = selectedItems.indexOf(o.id) >= 0 ? `${selectedItems.indexOf(o.id) + 1}` : '';
                            let selectedAll = selectedItems.length == selectedMax;
                            let thumber = React.createElement(image_thumber_1.default, { key: o.id, imagePath: o.id, width: 120, height: 120, remove: (imagePath) => this.removeImage(o), badgeText: 1, disabled: selectedAll && !selectedText, text: o.width != null && o.height != null ? `${o.width} X ${o.height}` : " " });
                            return thumber;
                        }),
                        React.createElement(image_upload_1.default, { className: "col-xs-2", saveImage: (data) => this.saveImage(data.base64), width: 400 }),
                        React.createElement("div", { className: "clearfix" })),
                    React.createElement("div", { className: "modal-footer" },
                        React.createElement("div", { className: "pull-left", ref: (e) => this.pagingBarElement = e || this.pagingBarElement }),
                        selectedMax ? React.createElement("div", { className: "pull-left", style: { paddingTop: 8, paddingLeft: 10 } },
                            "\u6700\u591A\u53EF\u9009",
                            React.createElement("b", { style: { padding: '0 2px 0 2px' } }, selectedMax),
                            "\u5F20") : null,
                        React.createElement("button", { name: "cancel", type: "button", className: "btn btn-default", onClick: () => ui.hideDialog(element) }, "\u53D6\u6D88"),
                        React.createElement("button", { name: "ok", type: "button", className: "btn btn-primary", onClick: () => {
                                if (this.showDialogCallback) {
                                    let imageIds = this.state.selectedItems.map(o => o);
                                    this.showDialogCallback(imageIds);
                                }
                                ui.hideDialog(element);
                            } }, "\u786E\u5B9A"))))
            // </div>
            );
        }
    }
    let element = common_1.createDialogElement('image-manager');
    let instance = ReactDOM.render(React.createElement(ImageManager, { element: element }), element);
    exports.default = {
        show(callback) {
            instance.show(null, callback);
        }
    };
    function showImageDialog(maxImagesCount, callback) {
        if (typeof maxImagesCount == 'function') {
            maxImagesCount = null;
            callback = maxImagesCount;
        }
        instance.show(maxImagesCount, callback);
    }
    exports.showImageDialog = showImageDialog;
});
