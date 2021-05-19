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
            <label>固定大小</label>
            <pre>{`<ImageUpload saveImage={(data) => this.uploadImage(data.base64)} displayImage={{ fixed: true }} />`}</pre>
            <ImageUpload saveImage={(data) => this.uploadImage(data.base64)} displayImage={{ fixed: true }} />
            <hr />
            <label>不固定大小</label>
            <pre>{`<ImageUpload saveImage={(data) => this.uploadImage(data.base64)} displayImage={{ fixed: false }} />`}</pre>
            <ImageUpload saveImage={(data) => this.uploadImage(data.base64)} displayImage={{ fixed: false }} />
            <hr />
            {messageElement}
        </div>;

    }
}