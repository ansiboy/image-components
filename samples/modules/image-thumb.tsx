import * as React from "react";
import { ImageService, ImageThumber } from "maishu-image-components";

interface State {
    imageInfos?: { path: string, text: string }[];
}

let imageService = new ImageService();

export default class ImageThumberPage extends React.Component<{}, State> {
    constructor(props: ImageThumberPage["props"]) {
        super(props);

        imageService.list({ maximumRows: 10 }).then(r => {
            let imageInfos = r.dataItems.map(o => ({ path: imageService.imageSource(o.id, 150, 150), text: `${o.width}X${o.height}` } as State["imageInfos"][0]));
            this.setState({ imageInfos });
        })
    }
    render() {
        let imageInfos = this.state?.imageInfos || [];
        return <div className="container">
            <div>
                {imageInfos.map((o, i) =>
                    <div style={{ marginRight: 10 }}><ImageThumber imagePath={o.path} text={o.text} selectedText={i.toString()} /></div>
                )}
            </div>
        </div>
    }
}