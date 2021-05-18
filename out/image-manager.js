"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showImageDialog = void 0;
const image_upload_1 = require("./image-upload");
const image_thumber_1 = require("./image-thumber");
// import * as wuzhui from 'maishu-wuzhui-helper';
const React = require("react");
const ReactDOM = require("react-dom");
const common_1 = require("./common");
const ui = require("maishu-ui-toolkit");
// import { DataSourceSelectArguments } from 'maishu-wuzhui-helper';
const image_service_1 = require("./image-service");
const strings_1 = require("./strings");
const maishu_toolkit_1 = require("maishu-toolkit");
require("../content/image-manager.less");
const number_paging_bar_1 = require("./number-paging-bar");
let strings = strings_1.getStrings();
class ImageManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [], selectedItems: [] };
        this.selectArguments = { maximumRows: 17 };
        this.dataSource = createImageDataSource();
        this.dataSource.selected.add(args => {
            this.setState({ images: args.selectResult.dataItems });
        });
        this.dataSource.inserted.add(args => {
            this.state.images.push(args.dataItem);
            this.setState({ images: this.state.images });
        });
        this.imageService = new image_service_1.ImageService();
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            new number_paging_bar_1.DataSourcePagingBar({
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
        });
    }
    show(selectedMax, callback) {
        this.showDialogCallback = callback;
        this.selectArguments.startRowIndex = 0;
        this.dataSource.select(this.selectArguments);
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
        let images = this.state.images;
        images = images.filter(o => o.id != item.id);
        this.setState({ images });
    }
    render() {
        let { images, selectedItems, selectedMax } = this.state;
        let element = this.props.element;
        return (React.createElement("div", { className: "modal-dialog modal-lg" },
            React.createElement("div", { className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("button", { type: "button", className: "btn close", onClick: () => ui.hideDialog(element) },
                        React.createElement("span", { "aria-hidden": "true" }, "\u00D7")),
                    React.createElement("h4", { className: "modal-title" }, strings.selectImage)),
                React.createElement("div", { className: "modal-body" },
                    images.map((o) => {
                        let selectedText = selectedItems.indexOf(o.id) >= 0 ? `${selectedItems.indexOf(o.id) + 1}` : '';
                        let selectedAll = selectedItems.length == selectedMax;
                        let thumber = React.createElement(image_thumber_1.default, { key: o.id, imagePath: this.imageService.imageSource(o.id, 150, 150), remove: () => this.removeImage(o), selectedText: selectedText, disabled: selectedAll && !selectedText, text: o.width != null && o.height != null ? `${o.width} X ${o.height}` : " ", onClick: () => {
                                let selectedItems = this.state.selectedItems;
                                if (selectedItems.indexOf(o.id) >= 0) {
                                    selectedItems = selectedItems.filter(c => c != o.id);
                                }
                                else {
                                    if (selectedItems.length == selectedMax)
                                        return;
                                    selectedItems.push(o.id);
                                }
                                this.setState({ selectedItems });
                            } });
                        return thumber;
                    }),
                    React.createElement(image_upload_1.default, { saveImage: (data) => this.saveImage(data.base64), width: 400 }),
                    React.createElement("div", { className: "clearfix" })),
                React.createElement("div", { className: "modal-footer" },
                    React.createElement("div", { className: "pull-left", ref: (e) => this.pagingBarElement = e || this.pagingBarElement }),
                    selectedMax ? React.createElement("div", { className: "pull-left", style: { paddingTop: 8, paddingLeft: 10 } },
                        strings.selectMax,
                        React.createElement("b", { style: { padding: '0 2px 0 2px' } }, selectedMax),
                        "\u5F20") : null,
                    React.createElement("button", { name: "cancel", type: "button", className: "btn btn-default", onClick: () => ui.hideDialog(element) }, strings.cancel),
                    React.createElement("button", { name: "ok", type: "button", className: "btn btn-primary", disabled: selectedItems.length == 0, onClick: () => {
                            if (this.showDialogCallback) {
                                let imageIds = this.state.selectedItems.map(o => o);
                                this.showDialogCallback(imageIds);
                            }
                            ui.hideDialog(element);
                        } }, strings.confirm)))));
    }
}
let element = common_1.createDialogElement('image-manager');
let instance = ReactDOM.render(React.createElement(ImageManager, { element: element }), element);
exports.default = {
    show(callback) {
        instance.show(undefined, callback);
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
function createImageDataSource() {
    let station = new image_service_1.ImageService();
    let dataSource = new maishu_toolkit_1.DataSource({
        primaryKeys: ['id'],
        select(args) {
            return __awaiter(this, void 0, void 0, function* () {
                let result = yield station.list(args); //, 140, 140
                return result;
            });
        },
        delete(item) {
            return __awaiter(this, void 0, void 0, function* () {
                let result = yield station.remove(item.id);
                return result;
            });
        },
        insert(item) {
            return __awaiter(this, void 0, void 0, function* () {
                console.assert(item.data != null);
                let result = yield station.upload(item.data);
                Object.assign(item, result);
                return result;
            });
        }
    });
    return dataSource;
}
