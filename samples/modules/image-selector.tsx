import * as React from "react";
import "bootstrap/less/bootstrap.less";
import { showImageDialog, ImageService } from "maishu-image-components";



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