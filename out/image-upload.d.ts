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
}
declare class ImageUpload extends React.Component<ImageUploadProps, any> {
    itemElement: HTMLElement;
    file: HTMLInputElement;
    image: HTMLImageElement;
    updloadImage(imageFile: File): void;
    setFileInput(e: HTMLInputElement): void;
    componentDidMount(): void;
    setSizes(): void;
    render(): JSX.Element;
}
export default ImageUpload;
