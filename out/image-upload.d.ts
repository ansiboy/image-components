import * as React from "react";
import * as ui from "maishu-ui-toolkit";
import "../content/image-upload.less";
interface ImageUploadProps extends React.ClassAttributes<ImageUpload> {
    style?: React.CSSProperties;
    saveImage: (data: ui.ImageFileToBase64Result) => Promise<any>;
    title?: string;
    className?: string;
    width?: number;
    height?: number;
    imageSource?: string;
}
interface ImageUploadState {
    imageSource?: string;
}
declare class ImageUpload extends React.Component<ImageUploadProps, ImageUploadState> {
    itemElement: HTMLElement;
    file: HTMLInputElement;
    image: HTMLImageElement;
    constructor(props: ImageUploadProps);
    updloadImage(imageFile: File): void;
    setFileInput(e: HTMLInputElement): void;
    componentDidMount(): void;
    setSizes(): void;
    render(): JSX.Element;
}
export default ImageUpload;
