import { ImageZoom } from "maishu-image-components";
import * as React from "react";

interface Props {
    /** 图片编号或者路径 */
    imageId: string,
    width: number,
    height: number,
    largeImageWidth: number,
    largeImageHeight: number,
}

export default class extends React.Component {
    div: HTMLElement;
    backgroundImageY = 0;

    setY() {
        this.backgroundImageY = this.backgroundImageY - 10;
        this.div.style.backgroundPositionY = `${this.backgroundImageY}px`;
    }
    render() {
        return <div className="container">
            <button className="btn btn-primary" onClick={() => this.setY()}>BUTTON</button>
            <div ref={e => this.div = e || this.div} style={{
                width: 300, height: 300,
                backgroundImage: "url(http://192.168.2.94:2880/image/image?id=f37b9587-df91-faf9-da5f-aecf6d133390_800_1066&width=600&height=600)",
                backgroundRepeat: "no-repeat"
            }}></div>
            <ImageZoom width={400} height={400} largeImageHeight={600} largeImageWidth={600}
                imageId={"f37b9587-df91-faf9-da5f-aecf6d133390_800_1066"}>

            </ImageZoom>
        </div>
    }
}