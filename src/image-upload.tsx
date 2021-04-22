import * as React from "react";
import * as ui from "maishu-ui-toolkit";
import "../content/image-upload.less";
import { getStrings } from "./strings";

let strings = getStrings();

interface ImageUploadProps extends React.ClassAttributes<ImageUpload> {
    style?: React.CSSProperties,
    saveImage: (data: ui.ImageFileToBase64Result) => Promise<any>,
    title?: string,
    className?: string,
    width?: number,
    height?: number,
    imageSource?: string,
}

interface ImageUploadState {
    imageSource?: string
}

class ImageUpload extends React.Component<ImageUploadProps, ImageUploadState> {
    itemElement: HTMLElement;
    file: HTMLInputElement;
    image: HTMLImageElement;

    constructor(props: ImageUploadProps) {
        super(props);

        this.state = { imageSource: props.imageSource };
    }

    updloadImage(imageFile: File) {
        let { width, height } = this.props;
        ui.imageFileToBase64(imageFile)
            .then(data => {
                this.props.saveImage(data);
                this.setState({ imageSource: data.base64 });
            });
    }
    setFileInput(e: HTMLInputElement) {
        if (!e || e.onchange) return;
        this.file = e;
        e.onchange = () => {
            if (e.files != null && e.files.length > 0)
                this.updloadImage(e.files[0]);
        }
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
                this.setSizes()
            }, 100)
        }
        //==========================================

        let height = width;
        let itemPaddingTop: number = 0;
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

        return <div className={`image-upload ${className}`} style={this.props.style}  >
            <div className="item" ref={e => this.itemElement = e || this.itemElement}>
                {imageSource ? <img src={imageSource} style={{ width: "100%", height: "100%" }} /> : <>
                    <i className="fa fa-plus fa-4x"></i>
                    <div>{title}</div>
                </>}
                <input type="file" style={{}}
                    ref={(e: HTMLInputElement) => this.setFileInput(e)} />
            </div>
        </div>
    }
}

export default ImageUpload;

