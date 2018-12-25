import React = require("react");
import * as ui from 'maishu-ui-toolkit'
import service from "./service";

interface ImageUploadProps extends React.Props<ImageUpload> {
    style?: React.CSSProperties,
    title?: string,
    className?: string,
    // width?: number,
    // height?: number,
    saveImage?: (data: ui.ImageFileToBase64Result) => Promise<any>,
    onSuccess?: (result: any) => void,
    onFail?: (err: Error) => void,
}

let style = document.createElement("style")
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
`

document.head.appendChild(style)

/**
 * 图片上传控件
 */
class ImageUpload extends React.Component<ImageUploadProps, any> {
    itemElement: HTMLElement;
    file: HTMLInputElement;
    image: HTMLImageElement;
    updloadImage(imageFile: File) {
        ui.imageFileToBase64(imageFile).then(data => {
            let p = this.props.saveImage ? this.props.saveImage : service.saveImage;
            p(data).then((result) => {
                debugger
                if (this.props.onSuccess)
                    this.props.onSuccess(result)
            }).catch(err => {
                if (this.props.onFail)
                    this.props.onFail(err)
            })

        });
    }
    setFileInput(e: HTMLInputElement) {
        if (!e || e.onchange) return;
        this.file = e;
        e.onchange = () => {
            if (e.files.length > 0)
                this.updloadImage(e.files[0]);
        }
    }
    componentDidMount() {
        // this.setSizes();
    }

    render() {
        let { title, className } = this.props;
        title = title || '图片上传'
        className = className || '';
        let titleHeight = '20px'
        return (
            <div className="image-upload" ref={(e: HTMLElement) => this.itemElement = e || this.itemElement} style={this.props.style}>
                <i className="icon-plus icon-4x"></i>
                <div style={{ position: 'relative', top: `calc( 50% - ${titleHeight} )`, height: titleHeight }}>{title}</div>
                <input type="file" style={{ width: '100%', height: '100%', position: 'relative', top: `-${titleHeight}` }}
                    ref={(e: HTMLInputElement) => this.setFileInput(e)} />
            </div>
        );
    }
}

export default ImageUpload;

