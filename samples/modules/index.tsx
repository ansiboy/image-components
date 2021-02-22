import * as React from "react";
import "bootstrap/less/bootstrap.less";
export default class IndexPage extends React.Component {
    render() {
        return <div className="container">
            <h1>图片组件</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <a href="#image-selector">图片选择</a>
                </li>
            </ul>
        </div>
    }
}