define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const imageThumbSize = 112;
    let selectedColor = 'blue';
    let style = document.createElement('style');
    style.innerHTML = `
    .image-thumber {
        border: 1px solid #cccccc;
    }
    .image-thumber.selected {
        border: 1px solid ${selectedColor};
    }
`;
    document.head.appendChild(style);
    class ImageThumber extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        setDeleteButton(e, imagePath) {
            if (!e)
                return;
            ui.buttonOnClick(e, (e) => {
                e.stopPropagation();
                e.cancelBubble = true;
                return this.props.remove(imagePath);
            }, {
                confirm: '确定删除该图片吗？'
            });
        }
        invokeOnClick(type) {
            alert(type);
            if (!this.props.onClick) {
                return;
            }
            this.props.onClick(this, type);
        }
        drawSelectedBadge(e, badge) {
            var path = new Path2D();
            path.moveTo(0, 0);
            path.lineTo(badge.size, 0);
            path.lineTo(badge.size, badge.size);
            path.closePath();
            var cxt = e.getContext("2d");
            cxt.fillStyle = badge.color;
            cxt.fill(path);
            let font_size = badge.fontSize;
            cxt.fillStyle = '#FFFFFF';
            cxt.font = `${font_size}px`;
            cxt.fillText(badge.text, badge.size - font_size, font_size);
        }
        drapRemoveBadge(e, badge) {
            var path = new Path2D();
            path.moveTo(0, 0);
            let padding = 2;
            path.arc(badge.size / 2, badge.size / 2, badge.size / 2 - padding, 0, 2 * Math.PI);
            var cxt = e.getContext("2d");
            cxt.fillStyle = badge.color;
            cxt.fill(path);
            cxt.fillStyle = '#ffffff';
            cxt.font = `${badge.fontSize - 4}px Calibri`;
            cxt.fillText('X', badge.size * 0.25 + 1.5, badge.size * 0.75 - 1.5, badge.size);
        }
        render() {
            let { imagePath, width, height, badgeText, title } = this.props;
            let badge = {
                size: 24,
                fontSize: 12,
                color: selectedColor,
                text: typeof badgeText == 'number' ? `${badgeText}` : badgeText,
            };
            let titleBar = {
                height: 22,
                paddingTop: 6,
                fontSize: 12,
            };
            let selected = typeof badgeText == 'number';
            return React.createElement("div", { className: selected ? "image-thumber selected" : "image-thumber", style: { width, height } },
                React.createElement("img", { src: imagePath, style: { width: '100%', height: '100%' }, onClick: e => this.invokeOnClick('image') }),
                React.createElement("canvas", { width: badge.size, height: badge.size, style: {
                        position: "relative", top: `-${height}px`, left: `calc(${width}px - ${badge.size}px)`,
                        visibility: badgeText == null ? 'hidden' : null
                    }, onClick: () => this.invokeOnClick('badge'), ref: e => {
                        if (!e)
                            return;
                        if (badge.text == 'X') {
                            badge.fontSize = 20;
                            badge.color = '#0000009e';
                            this.drapRemoveBadge(e, badge);
                        }
                        else {
                            this.drawSelectedBadge(e, badge);
                        }
                    } }),
                React.createElement("div", { onClick: () => this.invokeOnClick('title'), style: {
                        height: titleBar.height, width: '100%', paddingTop: titleBar.paddingTop, fontSize: titleBar.fontSize, textAlign: 'center',
                        color: 'white', backgroundColor: '#0000009e',
                        position: 'relative', top: `-${titleBar.height + titleBar.paddingTop + badge.size}px`,
                        visibility: title ? null : 'hidden'
                    } }, title));
            // className = className || '';
            // text = text || '';
            // return (
            //     <div className={`image-thumber ${className}`} title={title}
            //         onClick={(e) => {
            //             if (disabled)
            //                 return
            //             this.props.onClick ? this.props.onClick(this, e) : null
            //         }}>
            //         <div className={`item text-center  ${selectedText ? 'selected' : ''}`}>
            //             <div className="triangle"></div>
            //             <div className="top">
            //                 {selectedText}
            //             </div>
            //             {this.props.remove ?
            //                 <div className="remove">
            //                     <i className="icon-remove" ref={(e: any) => this.setDeleteButton(e, imagePath)} />
            //                 </div> : null}
            //             <img src={imagePath}
            //                 ref={(e: HTMLImageElement) => e ? ui.renderImage(e, { imageSize: { width: 150, height: 150 } }) : null} />
            //             <div className="bottom">
            //                 {text}
            //             </div>
            //             {disabled ? <div className="disabled"></div> : null}
            //         </div>
            //     </div>
            // );
        }
    }
    exports.default = ImageThumber;
});
