import { ImageService, ImageThumber } from "maishu-image-components";
import * as React from "react";

let imageService = new ImageService();

interface State {
    imageId?: string
}

export default class extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {};
    }
    async componentDidMount() {
        let r = await imageService.list({ maximumRows: 1 });
        this.setState({ imageId: r.dataItems[0]?.id || null })
    }
    render() {
        let imageId = this.state.imageId;
        if (imageId === undefined)
            return <div className="empty">数据加载中...</div>

        if (imageId === null)
            return <div className="empty">数据为空</div>

        return <div className="container">
            <h2>缩略图 - 文本</h2>
            <hr />
            <pre>{`<ImageThumber imagePath={imageService.imageSource(imageId)} text="Hello" />`}</pre>
            <div className="row">
                <div className="col-md-3">
                    <ImageThumber imagePath={imageService.imageSource(imageId)} text="Hello" />
                </div>
            </div>
        </div>
    }
}