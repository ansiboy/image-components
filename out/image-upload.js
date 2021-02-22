"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ui = require("maishu-ui-toolkit");
require("../content/image-upload.less");
const strings_1 = require("./strings");
let strings = strings_1.getStrings();
class ImageUpload extends React.Component {
    updloadImage(imageFile) {
        let { width, height } = this.props;
        ui.imageFileToBase64(imageFile)
            .then(data => {
            this.props.saveImage(data);
        });
    }
    setFileInput(e) {
        if (!e || e.onchange)
            return;
        this.file = e;
        e.onchange = () => {
            if (e.files.length > 0)
                this.updloadImage(e.files[0]);
        };
    }
    componentDidMount() {
        // this.setSizes();
    }
    setSizes() {
        let width = this.itemElement.offsetWidth;
        //==========================================
        // 获取元素的宽带，作为高度，如果小于一个很小的数值，
        // 比如 10，则认为元素没有渲染完成，稍后再获取
        if (width < 10) {
            setTimeout(() => {
                this.setSizes();
            }, 100);
        }
        //==========================================
        let height = width;
        let itemPaddingTop;
        this.itemElement.style.height = `${height}px`;
        if (height > 80) {
            itemPaddingTop = (height - 80) / 2;
            this.itemElement.style.paddingTop = `${itemPaddingTop}px`;
        }
        this.file.style.marginTop = `-${height - itemPaddingTop}px`;
        this.file.style.width = `${width}px`;
        this.file.style.height = `${height}px`;
    }
    render() {
        let { title, className } = this.props;
        title = title || strings.imageUpload;
        className = className || '';
        return (React.createElement("div", { className: `image-upload ${className}`, style: this.props.style },
            React.createElement("div", { className: "item", ref: (e) => this.itemElement = e || this.itemElement },
                React.createElement("i", { className: "fa fa-plus fa-4x" }),
                React.createElement("div", null, title),
                React.createElement("input", { type: "file", style: {}, ref: (e) => this.setFileInput(e) }))));
    }
}
exports.default = ImageUpload;
