import * as React from "react";
import { ImageService } from "./image-service";

interface ImageUploadProps {
    imageService: ImageService;
    text?: string;
    onUploaded?: (imageId: string) => void;
    imageId?: string;
}

interface ImageUploadState {
    isLoading: boolean,
    imageId: string | null
}

export class ImageUpload extends React.Component<ImageUploadProps, ImageUploadState> {

    static defaultProps: Pick<ImageUploadProps, "text"> = { text: "上传图片" };

    constructor(props: ImageUploadProps) {
        super(props);

        this.state = { isLoading: false, imageId: props.imageId || null };
    }

    static getDerivedStateFromProps(nextProps: ImageUploadProps, prevState: ImageUploadState): Partial<ImageUploadState> | null {
        if (nextProps.imageId == prevState.imageId)
            return null;

        return { imageId: nextProps.imageId };
    }

    private uploadFile(data: string | File) {
        this.setState({ isLoading: true, imageId: null });
        this.props.imageService.upload(data).then(r => {
            this.setState({ isLoading: false, imageId: r.id });
            if (this.props.onUploaded) {
                this.props.onUploaded(r.id);
            }
        }).catch(err => {
            this.setState({ isLoading: false });
        });
    }

    render() {
        let isLoading = this.state.isLoading;
        let imageId = this.state.imageId;

        if (isLoading) {
            return <div className="image-upload">
                <div className="item" >
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        }

        return <div className="image-upload">
            <div className="item">
                {imageId ? <img src={ImageService.imageSource(imageId || "", 100, 100)} style={{ width: "100%", height: "100%" }} /> :
                    <>
                        <i className="fa fa-plus fa-4x"></i>
                        <div>{this.props.text || ""}</div>
                    </>}
                <input type="file" multiple={false} accept="image/*" onChange={e => {
                    let selectedFile = (e.target.files || [])[0];
                    if (selectedFile == null)
                        return;

                    this.uploadFile(selectedFile);
                    e.target.value = "";
                }} />
            </div>
        </div>
    }
}