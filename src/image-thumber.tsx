import * as React from "react";
import * as ui from "maishu-ui-toolkit";

type ImageThumberProps = React.Props<ImageThumber> & {
    imagePath: string, remove?: (imagePath: string) => Promise<any>,
    className?: string, onClick?: (sender: ImageThumber, e: React.MouseEvent) => void,
    selectedText?: string,
    text?: string, title?: string,
    disabled?: boolean
}

type ImageThumberState = {
}

import "../content/image-thumber.less";
import { getStrings } from "./strings";

let strings = getStrings();
export default class ImageThumber extends React.Component<ImageThumberProps, ImageThumberState>{
    constructor(props: ImageThumberProps) {
        super(props);
        this.state = { selectedText: '' }
    }
    private setDeleteButton(e: HTMLButtonElement, imagePath: string) {
        if (!e) return;
        ui.buttonOnClick(e,
            (e) => {
                e.stopPropagation();
                e.cancelBubble = true;
                if (this.props.remove)
                    return this.props.remove(imagePath);

                return Promise.resolve();
            },
            {
                confirm: strings.deleteImageConfirm
            });
    }
    render() {
        let { imagePath, className, onClick, selectedText, text, title, disabled } = this.props;
        className = className || '';
        text = text || '';
        return (
            <div className={`image-thumber ${className}`} title={title} data-url={imagePath}
                onClick={(e) => {
                    if (disabled)
                        return

                    this.props.onClick ? this.props.onClick(this, e) : null
                }}>
                <div className={`item text-center  ${selectedText ? 'selected' : ''}`}>
                    <div className="triangle"></div>
                    <div className="top">
                        {selectedText}
                    </div>
                    {this.props.remove ?
                        <div className="remove">
                            <i className="fa fa-remove" ref={(e: any) => this.setDeleteButton(e, imagePath)} />
                        </div> : null}
                    <img className="img-responsive" src={imagePath}
                        ref={(e: HTMLImageElement) => e ? ui.renderImage(e, { imageSize: { width: 150, height: 150 } }) : null} />
                    <div className="bottom">
                        {text}
                    </div>
                    {disabled ? <div className="disabled"></div> : null}
                </div>
            </div>
        );
    }
}
