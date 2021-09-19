import * as React from "react";
import { FileUpload, ImageService, VideoService } from "maishu-image-components"
import { PageProps } from "maishu-chitu-react";

export default class DefaultVideoUpload extends React.Component<PageProps> {
    private videoService: VideoService;

    constructor(props) {
        super(props);

        this.state = {};
        this.videoService = this.props.app.createService(VideoService);
    }

    render() {
        return <div className="container">
            <br />
            <FileUpload accept="video/*"
                display={null}
                uploadFile={async files => {
                    await this.videoService.upload(files[0]);
                    let videoUrl = `${ImageService.serviceHost}/video/${files[0].name}`;
                    return <video controls={true} autoPlay={true} style={{ height: 120 }}
                        ref={e => {
                            if (!e) return;
                            e.play();
                        }}>
                        <source src="http://127.0.0.1:48628/video/T20%E6%8A%95%E5%BD%B1%E4%BB%AA.mp4?application-id=7bbfa36c-8115-47ad-8d47-9e52b58e7efd" type="video/mp4" />
                    </video>
                }}>

            </FileUpload>
        </div>
    }
}