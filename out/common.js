define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function imageUrl(path, width, height) {
        if (!path)
            return path;
        if (path.startsWith('data:image'))
            return path;
        if (path.indexOf(',') > 0) {
            path = path.split(',')[0];
        }
        let HTTP = 'http://';
        if (path.startsWith(HTTP)) {
            path = path.substr(HTTP.length);
            let index = path.indexOf('/');
            console.assert(index > 0);
            path = path.substr(index);
        }
        else if (path[0] == '/') {
            path = path.substr(1);
        }
        let urlParams = new Array();
        let protocol = location.protocol;
        let url = `${path}`;
        if (width) {
            // url = url + '?width=' + width;
            urlParams.push({ name: 'width', value: width.toString() });
            if (height)
                urlParams.push({ name: 'height', value: height.toString() });
        }
        if (navigator.userAgent.indexOf('chrome') < 0) {
            urlParams.push({ name: 'type', value: 'jpeg' });
        }
        if (urlParams.length > 0) {
            url = url + '?' + urlParams.map(o => `${o.name}=${o.value}`).join('&');
        }
        return url;
    }
    exports.imageUrl = imageUrl;
    function createDialogElement(className) {
        let element = document.createElement('div');
        element.className = 'modal fade ' + className;
        element.style.zIndex = '1000';
        document.body.appendChild(element);
        return element;
    }
    exports.createDialogElement = createDialogElement;
});
