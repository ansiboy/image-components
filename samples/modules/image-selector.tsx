import * as React from "react";
import "bootstrap/less/bootstrap.less";
import { showImageDialog, config, ImageService } from "maishu-image-components";

config.serviceHost = "http://192.168.2.94:2880/image";
ImageService.headers["application-id"] = "7bbfa36c-8115-47ad-8d47-9e52b58e7efd";

export default class ImageSelector extends React.Component {
    showImageDialog() {
        showImageDialog(12, (ids) => {

        })
    }
    render() {
        return <div className="container">
            <h1>图片选取</h1>
            <button className="btn btn-primary" onClick={() => this.showImageDialog()}>点击选择图片</button>
        </div>
    }
}