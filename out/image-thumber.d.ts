import * as React from "react";
declare type ImageThumberProps = React.Props<ImageThumber> & {
    imagePath: string;
    remove?: (imagePath: string) => Promise<any>;
    className?: string;
    onClick?: (sender: ImageThumber, e: React.MouseEvent) => void;
    selectedText?: string;
    text?: string;
    title?: string;
    disabled?: boolean;
};
declare type ImageThumberState = {};
import "../content/image-thumber.less";
export default class ImageThumber extends React.Component<ImageThumberProps, ImageThumberState> {
    constructor(props: any);
    private setDeleteButton;
    render(): JSX.Element;
}
export {};
