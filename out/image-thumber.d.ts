import React = require("react");
declare type ImageThumberProps = React.Props<ImageThumber> & {
    imagePath: string;
    width: number;
    height: number;
    remove?: (imagePath: string) => Promise<any>;
    onClick?: (sender: ImageThumber, type: 'image' | 'badge' | 'title') => void;
    badgeText?: number | 'X';
    text?: string;
    title?: string;
    disabled?: boolean;
};
declare type ImageThumberState = {};
export default class ImageThumber extends React.Component<ImageThumberProps, ImageThumberState> {
    constructor(props: any);
    private setDeleteButton;
    private invokeOnClick;
    private drawSelectedBadge;
    private drapRemoveBadge;
    render(): JSX.Element;
}
export {};
