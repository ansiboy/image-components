import * as React from "react";
import * as ui from "maishu-ui-toolkit";
import "../content/image-upload.less";
interface ImageUploadProps extends React.ClassAttributes<ImageUpload> {
    saveImage: (data: ui.ImageFileToBase64Result) => Promise<any>;
    /** 控件样式 */
    style?: React.CSSProperties;
    /** 标题 */
    title?: string;
    /** 类名 */
    className?: string;
    /** 控件宽度 */
    width?: number;
    /** 控件高度 */
    height?: number;
    /** 控件图片 */
    imageSource?: string;
    /** 图片显示设置 */
    displayImage?: {
        /** 固定图片高度，宽度为控件的高度宽度 */
        fixed?: boolean;
        /** 图片最大宽度，仅当 fixed 为 true 有效 */
        maxWidth?: number;
    };
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
