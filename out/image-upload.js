"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ui = require("maishu-ui-toolkit");
require("../content/image-upload.less");
const strings_1 = require("./strings");
const ReactDOM = require("react-dom");
let strings = strings_1.getStrings();
class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imageSource: props.imageSource };
    }
    updloadImage(imageFile) {
        let { width, height } = this.props;
        ui.imageFileToBase64(imageFile)
            .then(data => {
            this.props.saveImage(data);
            this.setState({ imageSource: data.base64 });
        });
    }
    setFileInput(e) {
        if (!e || e.onchange)
            return;
        this.file = e;
        e.onchange = () => {
            if (e.files != null && e.files.length > 0)
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
        let itemPaddingTop = 0;
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
        let { imageSource } = this.state || {};
        title = title || strings.imageUpload;
        className = className || '';
        // if (imageSource != null && !this.props.displayImage?.fixed)
        // return <div className={`image-upload ${className}`} style={this.props.style}  >
        //     <div className="item" ref={e => this.itemElement = e || this.itemElement}>
        //         {imageSource ? <img src={imageSource} style={{ width: "100%", height: "100%" }} /> : <>
        //             <i className="fa fa-plus fa-4x"></i>
        //             <div>{title}</div>
        //         </>}
        //         <input type="file" style={{}}
        //             ref={(e: HTMLInputElement) => this.setFileInput(e)} />
        //     </div>
        // </div>
        if (imageSource == null || this.props.displayImage == null) {
            return React.createElement("div", { className: `image-upload ${className}`, style: this.props.style },
                React.createElement("div", { className: "item", ref: e => this.itemElement = e || this.itemElement },
                    React.createElement(React.Fragment, null,
                        React.createElement("i", { className: "fa fa-plus fa-4x" }),
                        React.createElement("div", null, title)),
                    React.createElement("input", { type: "file", style: {}, ref: (e) => this.setFileInput(e) })));
        }
        if (this.props.displayImage.fixed) {
            return React.createElement("div", { className: `image-upload ${className}`, style: this.props.style },
                React.createElement("div", { className: "item", ref: e => this.itemElement = e || this.itemElement },
                    React.createElement("img", { src: imageSource, style: { width: "100%", height: "100%" } })));
        }
        return React.createElement("div", { ref: div => {
                if (!div)
                    return;
                let imageElement = document.createElement("img");
                imageElement.src = imageSource;
                imageElement.onload = (e) => {
                    var _a;
                    let width = e.target.width;
                    let height = e.target.height;
                    let maxWidth = (_a = this.props.displayImage) === null || _a === void 0 ? void 0 : _a.maxWidth;
                    if (maxWidth) {
                        let scale = height / width; //`${this.props.displayImage.maxWidth}px`;
                        height = maxWidth * scale;
                        width = maxWidth;
                    }
                    div.style.backgroundImage = `url(${e.target.src})`;
                    div.style.backgroundSize = `${width}px ${height}px`;
                    div.style.backgroundRepeat = "no-repeat";
                    let fileElement = div.querySelector('[type="file"]');
                    fileElement.style.width = `${width}px`;
                    fileElement.style.height = `${height}px`;
                };
                ReactDOM.render(React.createElement(React.Fragment, null,
                    React.createElement("input", { type: "file", style: { opacity: 0 }, ref: (e) => this.setFileInput(e) })), div);
            } });
    }
}
exports.default = ImageUpload;
