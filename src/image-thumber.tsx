import * as React from "react";
import * as ui from "maishu-ui-toolkit";

type ImageThumberProps = React.ClassAttributes<ImageThumber> & {
    imagePath: string, remove?: (imagePath: string) => Promise<any>,
    className?: string, onClick?: (sender: ImageThumber, e: React.MouseEvent) => void,
    selectedText?: string,
    text?: string, title?: string,
    disabled?: boolean
}

type ImageThumberState = {
    selectedText?: string;
}

import "../content/image-thumber.less";
import { getStrings } from "./strings";

let strings = getStrings();
export default class ImageThumber<P = {}> extends React.Component<ImageThumberProps & P, ImageThumberState>{
    constructor(props: ImageThumberProps & P) {
        super(props);
        this.state = { selectedText: props.selectedText }
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
        let { imagePath, onClick, title, disabled } = this.props;
        let { selectedText } = this.state;
        let className = this.props.className as string;
        let text = this.props.text as string;
        className = className || '';
        text = text || '';

        return (
            <div className={`image-thumber ${className}`} title={title} data-url={imagePath}
                onClick={(e) => {
                    if (disabled)
                        return

                    onClick ? onClick(this, e) : null
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
                    <img className="img-responsive" src={imagePath} />
                    {text ? <div className="bottom">
                        {text}
                    </div> : null}
                    {disabled ? <div className="disabled"></div> : null}
                    {this.props.children}
                </div>
            </div>
        );
    }
}
