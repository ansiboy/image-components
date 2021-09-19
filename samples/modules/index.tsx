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
                    <a href="#image-upload/display-image/source">图片上传 - 显示图片 - 默认图片</a>
                </li>
                <li className="list-group-item">
                    <a href="#image-upload/image-upload-loading">图片上传 - 显示 Loading</a>
                </li>
                <li className="list-group-item">
                    <a href="#image-thumb/default">缩略图 - 默认</a>
                </li>
                <li className="list-group-item">
                    <a href="#image-thumb/text">缩略图 - 文本</a>
                </li>
                <li className="list-group-item">
                    <a href="#image-thumb/select">缩略图 - 选中状态</a>
                </li>
                <li className="list-group-item">
                    <a href="#image-thumb/children">缩略图 - 子元素</a>
                </li>
                <li className="list-group-item">
                    <a href="#image-thumb">缩略图</a>
                </li>
                <li className="list-group-item">
                    <a href="#dialogs/dialog-base">对话框 - 基础</a>
                </li>
                <li className="list-group-item">
                    <a href="#dialogs/dialog-data-source">对话框 - 数据源</a>
                </li>
                <li className="list-group-item">
                    <a href="#dialogs/image">图片对话框</a>
                </li>
                <li className="list-group-item">
                    <a href="#video-upload/default">视频上传</a>
                </li>
            </ul>
        </div>
    }
}