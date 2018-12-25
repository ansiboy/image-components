import React = require("react");
import * as ui from 'maishu-ui-toolkit';
interface ImageUploadProps extends React.Props<ImageUpload> {
    style?: React.CSSProperties;
    title?: string;
    className?: string;
    saveImage?: (data: ui.ImageFileToBase64Result) => Promise<any>;
    onSuccess?: (result: any) => void;
    onFail?: (err: Error) => void;
}
/**
 * 图片上传控件
 */
declare class ImageUpload extends React.Component<ImageUploadProps, any> {
    itemElement: HTMLElement;
    file: HTMLInputElement;
    image: HTMLImageElement;
    updloadImage(imageFile: File): void;
    setFileInput(e: HTMLInputElement): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default ImageUpload;
