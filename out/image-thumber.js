"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ui = require("maishu-ui-toolkit");
require("../content/image-thumber.less");
const strings_1 = require("./strings");
let strings = strings_1.getStrings();
class ImageThumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedText: '' };
    }
    setDeleteButton(e, imagePath) {
        if (!e)
            return;
        ui.buttonOnClick(e, (e) => {
            e.stopPropagation();
            e.cancelBubble = true;
            return this.props.remove(imagePath);
        }, {
            confirm: strings.deleteImageConfirm
        });
    }
    render() {
        let { imagePath, className, onClick, selectedText, text, title, disabled } = this.props;
        className = className || '';
        text = text || '';
        return (React.createElement("div", { className: `image-thumber ${className}`, title: title, "data-url": imagePath, onClick: (e) => {
                if (disabled)
                    return;
                this.props.onClick ? this.props.onClick(this, e) : null;
            } },
            React.createElement("div", { className: `item text-center  ${selectedText ? 'selected' : ''}` },
                React.createElement("div", { className: "triangle" }),
                React.createElement("div", { className: "top" }, selectedText),
                this.props.remove ?
                    React.createElement("div", { className: "remove" },
                        React.createElement("i", { className: "fa fa-remove", ref: (e) => this.setDeleteButton(e, imagePath) })) : null,
                React.createElement("img", { src: imagePath, ref: (e) => e ? ui.renderImage(e, { imageSize: { width: 150, height: 150 } }) : null }),
                React.createElement("div", { className: "bottom" }, text),
                disabled ? React.createElement("div", { className: "disabled" }) : null)));
    }
}
exports.default = ImageThumber;
