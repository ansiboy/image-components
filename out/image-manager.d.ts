import "../content/image-manager.less";
declare const _default: {
    show(callback?: ((imageIds: string[]) => void) | undefined): void;
};
export default _default;
export declare function showImageDialog(maxImagesCount: number, callback: (imageIds: string[]) => void): void;
export declare function showImageDialog(callback: (imageIds: string[]) => void): void;
