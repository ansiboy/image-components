import * as React from "react";


export default class IndexPage extends React.Component {
    render() {
        return <div className="container">
            <h1>图片组件</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <a href="#image-selector">图片选择</a>
                </li>
                <li className="list-group-item">
                    <a href="#image-upload/default">图片上传 - 默认</a>
                </li>
                <li className="list-group-item">
                    <a href="#image-upload/display-image/fixed">图片上传 - 显示图片 - 固定大小</a>
                </li>
                <li className="list-group-item">
                    <a href="#image-upload/display-image/max-width">图片上传 - 显示图片 - 最大宽度</a>
                </li>
                <li className="list-group-item">
                    <a href="#image-thumb">缩略图</a>
                </li>
                <li className="list-group-item">
                    <a href="#image-zoom">图片放大</a>
                </li>
            </ul>
        </div>
    }
}