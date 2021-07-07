import * as React from "react";
import { ImageService, ImageUpload, showImageDialog } from "maishu-image-components";

let imageService = new ImageService();
interface State {
    status?: "uploading" | "success" | "fail";
    error?: Error;
}

export default class ImageUploadPage extends React.Component<{}, State> {
    constructor(props) {
        super(props);

        this.state = {};
    }

    async uploadImage(imageBase64: string) {
        this.setState({ status: "uploading" })
        return imageService.upload(imageBase64).then(() => {
            this.setState({ status: "success" });
        }).catch(err => {
            this.setState({ status: "fail", error: err })
        });
    }
    showImageManager() {
        showImageDialog(1, () => {

        })
    }
    render() {
        let { status } = this.state;

        let messageElement: JSX.Element;
        switch (status) {
            case "uploading":
                messageElement = <div>图片正在上传中...</div>;
                break;
            case "success":
                messageElement = <div>图片上传成功</div>;
                break;
            case "fail":
                messageElement = <div>图片上传失败</div>;
                break;
        }

        return <div className="container">
            <br />
            <label>默认</label>
            <pre>{`<ImageUpload saveImage={(data) => this.uploadImage(data.base64)} />`}</pre>
            <ImageUpload saveImage={(data, file) => this.uploadImage(data.base64)} />
            {messageElement}
            {/* <hr />
            <label>设置默认图片</label>
            <pre>{`<ImageUpload saveImage={(data) => this.uploadImage(data.base64)} imageSource="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" />`}</pre>
            <ImageUpload saveImage={(data) => this.uploadImage(data.base64)} imageSource="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" />
            <hr />
            <label>图片设置(图片不固定大小)</label>
            <pre>{`<ImageUpload saveImage={(data) => this.uploadImage(data.base64)}
            displayImage={{ fixed: false }}
            imageSource="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" />`}</pre>
            <ImageUpload saveImage={(data) => this.uploadImage(data.base64)}
                displayImage={{ fixed: false }}
                imageSource="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" />
            <hr />

            <label>图片设置(图片设置最大宽度)</label>
            <ImageUpload saveImage={(data) => this.uploadImage(data.base64)}
                displayImage={{ fixed: true, maxWidth: 200 }}
                imageSource="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" /> */}
        </div>;

    }
}