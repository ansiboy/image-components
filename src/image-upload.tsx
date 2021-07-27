import * as React from "react";
import * as ui from "maishu-ui-toolkit";
import "../content/image-upload.less";
import { getStrings } from "./strings";
import ReactDOM = require("react-dom");

let strings = getStrings();

interface ImageUploadProps extends React.ClassAttributes<ImageUpload> {

    saveImage: (data: ui.ImageFileToBase64Result, file: File) => Promise<any>,

    /** 控件样式 */
    style?: React.CSSProperties,

    /** 标题 */
    title?: string,

    /** 类名 */
    className?: string,

    /** 控件宽度 */
    width?: number,

    /** 控件高度 */
    height?: number,

    // /** 控件图片 */
    // imageSource?: string,

    /** 图片显示设置 */
    displayImage?: {
        /** 固定图片高度，宽度为控件的高度宽度 */
        fixed?: boolean,
        /** 图片最大宽度，仅当 fixed 为 true 有效 */
        maxWidth?: number,
        /** 图片路径 */
        source?: string,
    }
}

interface ImageUploadState {
    imageSource?: string
}

class ImageUpload extends React.Component<ImageUploadProps, ImageUploadState> {

    // static defaultProps: Pick<ImageUploadProps, "displayImage"> = { displayImage: { fixed: true } };

    itemElement: HTMLElement;
    file: HTMLInputElement;
    image: HTMLImageElement;

    constructor(props: ImageUploadProps) {
        super(props);

        this.state = { imageSource: props.displayImage?.source };
    }

    updloadImage(imageFile: File) {
        let { width, height } = this.props;
        ui.imageFileToBase64(imageFile)
            .then(data => {
                this.props.saveImage(data, imageFile);
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

        if (imageSource == null || this.props.displayImage == null) {
            return <div className={`image-upload ${className}`} style={this.props.style}  >
                <div className="item" ref={e => this.itemElement = e || this.itemElement}>
                    <>
                        <i className="fa fa-plus fa-4x"></i>
                        <div>{title}</div>
                    </>
                    <input type="file" style={{}} accept="image/*"
                        ref={(e: HTMLInputElement) => this.setFileInput(e)} />
                </div>
            </div>
        }

        if (this.props.displayImage.fixed) {
            return <div className={`image-upload ${className}`} style={this.props.style}  >
                <div className="item" ref={e => this.itemElement = e || this.itemElement}>
                    <img src={imageSource} style={{ width: "100%", height: "100%" }} />
                    <input type="file" style={{}}
                        ref={(e: HTMLInputElement) => this.setFileInput(e)} />
                </div>
            </div>
        }

        return <div className={`image-upload ${className}`} ref={div => {
            if (!div) return;

            let imageElement = document.createElement("img") as HTMLImageElement;

            imageElement.src = imageSource as string;
            imageElement.onload = (e) => {
                let width = (e.target as HTMLImageElement).width;
                let height = (e.target as HTMLImageElement).height;

                let maxWidth = this.props.displayImage?.maxWidth;
                if (maxWidth) {
                    let scale = height / width;//`${this.props.displayImage.maxWidth}px`;
                    height = maxWidth * scale;
                    width = maxWidth;
                }

                div.style.backgroundImage = `url(${(e.target as HTMLImageElement).src})`;
                div.style.backgroundSize = `${width}px ${height}px`;
                div.style.backgroundRepeat = "no-repeat";

                let fileElement = div.querySelector('[type="file"]') as HTMLInputElement;
                fileElement.style.width = `${width}px`;
                fileElement.style.height = `${height}px`;
            }

            ReactDOM.render(<>
                <input type="file" style={{ opacity: 0 }}
                    ref={(e: HTMLInputElement) => this.setFileInput(e)} />
            </>, div)
        }}>

        </div>



    }
}

export default ImageUpload;

