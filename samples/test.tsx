import { ImageUpload, ImageThumber, service } from "../src/index";

import ReactDOM = require("react-dom");
import React = require("react");

let button = document.createElement('button')
button.innerHTML = "TEST"
button.onclick = function () {
    alert('hello')
}
document.body.appendChild(button)

let element = document.createElement('div')
document.body.appendChild(element)
ReactDOM.render(<ImageUpload style={{ width: 120, height: 120 }}
    saveImage={(data) => {
        return service.saveImage(data)
    }} />, element)



element = document.createElement('div')
document.body.appendChild(element)
ReactDOM.render(<ImageThumber imagePath="http://127.0.0.1:48628/image/?id=3f314c53-361f-8a9b-db9a-e374d62a1ecf"
    width={120} height={120} badgeText={1} title="hello world" />, element)

element = document.createElement('div')
document.body.appendChild(element)
ReactDOM.render(<ImageThumber imagePath="http://127.0.0.1:48628/image/?id=3f314c53-361f-8a9b-db9a-e374d62a1ecf"
    width={120} height={120} badgeText="X" title="hello world" />, element)