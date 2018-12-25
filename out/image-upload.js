(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "maishu-ui-toolkit", "./service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const React = require("react");
    const ui = require("maishu-ui-toolkit");
    const service_1 = require("./service");
    let style = document.createElement("style");
    style.innerHTML = `
    .image-upload {
        border: 1px solid #cccccc;      
        text-align: center;  
        width: 120px;
        height: 120px;
    }
    .image-upload input[type="file"] {
        opacity: 0;
    }
`;
    document.head.appendChild(style);
    /**
     * 图片上传控件
     */
    class ImageUpload extends React.Component {
        updloadImage(imageFile) {
            ui.imageFileToBase64(imageFile).then(data => {
                let p = this.props.saveImage ? this.props.saveImage : service_1.default.saveImage;
                p(data).then((result) => {
                    debugger;
                    if (this.props.onSuccess)
                        this.props.onSuccess(result);
                }).catch(err => {
                    if (this.props.onFail)
                        this.props.onFail(err);
                });
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
        render() {
            let { title, className } = this.props;
            title = title || '图片上传';
            className = className || '';
            let titleHeight = '20px';
            return (React.createElement("div", { className: "image-upload", ref: (e) => this.itemElement = e || this.itemElement, style: this.props.style },
                React.createElement("i", { className: "icon-plus icon-4x" }),
                React.createElement("div", { style: { position: 'relative', top: `calc( 50% - ${titleHeight} )`, height: titleHeight } }, title),
                React.createElement("input", { type: "file", style: { width: '100%', height: '100%', position: 'relative', top: `-${titleHeight}` }, ref: (e) => this.setFileInput(e) })));
        }
    }
    exports.default = ImageUpload;
});
