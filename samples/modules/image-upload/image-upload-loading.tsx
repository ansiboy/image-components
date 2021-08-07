import * as React from "react";
import { ImageUpload, ImageService } from "maishu-image-components";
import { PageProps } from "maishu-chitu-react";

export default class ImageUploadLoading extends React.Component<PageProps, {}> {
    imageService: ImageService;

    constructor(props: PageProps) {
        super(props);

        this.imageService = this.props.app.createService(ImageService as any) as any as ImageService;
    }

    render() {
        return <div className="container">
            <br />
            <label>图片上传</label>
            <ImageUpload imageService={this.imageService} />
        </div>
    }
}