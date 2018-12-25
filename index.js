(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.image_components = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const React = require("react");
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

},{"react":"react"}],2:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "maishu-ui-toolkit"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const React = require("react");
    const ui = require("maishu-ui-toolkit");
    // requirejs(['less!image-upload']);
    let style = document.createElement("style");
    style.innerHTML = `
    .image-upload {
        border: 1px solid #cccccc;      
        text-align: center;  
        width: 120px;
        height: 120px;
    }
    .image-upload input[type="file"] {
        opacity: 0;
    }
`;
    document.head.appendChild(style);
    /**
     * 图片上传控件
     */
    class ImageUpload extends React.Component {
        updloadImage(imageFile) {
            ui.imageFileToBase64(imageFile)
                .then(data => {
                this.props.saveImage(data);
            });
        }
        setFileInput(e) {
            if (!e || e.onchange)
                return;
            this.file = e;
            e.onchange = () => {
                if (e.files.length > 0)
                    this.updloadImage(e.files[0]);
            };
        }
        componentDidMount() {
            // this.setSizes();
        }
        render() {
            let { title, className } = this.props;
            title = title || '图片上传';
            className = className || '';
            let titleHeight = '20px';
            return (React.createElement("div", { className: "image-upload", ref: (e) => this.itemElement = e || this.itemElement, style: this.props.style },
                React.createElement("i", { className: "icon-plus icon-4x" }),
                React.createElement("div", { style: { position: 'relative', top: `calc( 50% - ${titleHeight} )`, height: titleHeight } }, title),
                React.createElement("input", { type: "file", style: { width: '100%', height: '100%', position: 'relative', top: `-${titleHeight}` }, ref: (e) => this.setFileInput(e) })));
        }
    }
    exports.default = ImageUpload;
});

},{"maishu-ui-toolkit":"maishu-ui-toolkit","react":"react"}],3:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./image-thumber", "./image-upload", "./service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var image_thumber_1 = require("./image-thumber");
    exports.ImageThumber = image_thumber_1.default;
    var image_upload_1 = require("./image-upload");
    exports.ImageUpload = image_upload_1.default;
    var service_1 = require("./service");
    exports.service = service_1.default;
});

},{"./image-thumber":1,"./image-upload":2,"./service":4}],4:[function(require,module,exports){
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "maishu-chitu"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const chitu = require("maishu-chitu");
    let serviceHost = '127.0.0.1:48628';
    class Service extends chitu.Service {
        constructor() {
            super();
        }
        ajax(url, options) {
            if (!url.startsWith('http')) {
                url = location.protocol + "//" + serviceHost + "/" + url;
            }
            return super.ajax(url, options);
        }
        getByJson(url, data) {
            if (data && Object.getOwnPropertyNames(data).length > 0)
                url = `${url}?${JSON.stringify(data)}`;
            let headers = { "content-type": 'application/json' };
            return this.ajax(url, { headers, method: 'get' });
        }
        putByJson(url, data) {
            let headers = { "content-type": 'application/json' };
            return this.ajax(url, { headers, data, method: 'put' });
        }
        postByJson(url, data) {
            let headers = { "content-type": 'application/json' };
            return this.ajax(url, { headers, data, method: 'post' });
        }
        deleteByJson(url, data) {
            let headers = { "content-type": 'application/json' };
            return this.ajax(url, { headers, data, method: 'delete' });
        }
        get(url, data) {
            data = data || {};
            let params = "";
            for (let key in data) {
                params = params ? `${params}&${key}=${data[key]}` : `${key}=${data[key]}`;
            }
            if (params) {
                url = `${url}?${params}`;
            }
            return this.ajax(url, { method: 'get' });
        }
        put(url, data) {
            let headers = { "content-type": 'application/x-www-form-urlencoded' };
            return this.ajax(url, { headers, data, method: 'put' });
        }
        post(url, data) {
            let headers = { "content-type": 'application/x-www-form-urlencoded' };
            return this.ajax(url, { headers, data, method: 'post', });
        }
        delete(url, data) {
            let headers = { "content-type": 'application/x-www-form-urlencoded' };
            return this.ajax(url, { headers, data, method: 'delete' });
        }
        saveImage(data) {
            let { base64, width, height } = data;
            return this.postByJson('upload', { image: base64, width, height });
        }
        images(args, width, height) {
            return Promise.resolve(null);
        }
        removeImage(id) {
            return this.postByJson('remove', { id });
        }
    }
    let service = new Service();
    exports.default = service;
});

},{"maishu-chitu":"maishu-chitu"}]},{},[3])(3)
});
