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

    uploadImage(imageBase64: string) {
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
            <ImageUpload saveImage={(data) => this.uploadImage(data.base64)} />
            {messageElement}
            <button className="btn btn-primary" onClick={() => this.showImageManager()}>
                图片管理
            </button>
        </div>;

    }
}