import * as React from "react";
import * as ui from "maishu-ui-toolkit";
import "../content/image-upload.less";
import { getStrings } from "./strings";
import ReactDOM = require("react-dom");

let strings = getStrings();

interface Props extends React.ClassAttributes<FileUpload> {

    uploadFile?: (files: File[]) => Promise<JSX.Element>,

    /** 控件样式 */
    style?: React.CSSProperties,

    /** 标题 */
    title?: string,

    /** 类名 */
    className?: string,

    accept?: string,

    multiple?: boolean,

    display?: JSX.Element,

}

interface State {
    uploading: boolean,
    display?: JSX.Element
}

export class FileUpload extends React.Component<Props, State> {

    itemElement: HTMLElement;
    file: HTMLInputElement;
    image: HTMLImageElement;

    constructor(props: Props) {
        super(props);

        this.state = { uploading: false, display: props.display };
    }

    fileRef(e: HTMLInputElement) {
        if (!e) return;
        e.onchange = () => {
            let files: File[] = [];
            if (e.files != null && e.files.length > 0) {
                let file = e.files.item(0);
                if (file)
                    files.push(file)

            }

            if (files.length > 0 && this.props.uploadFile) {
                this.setState({ uploading: true })
                this.props.uploadFile(files).then(r => {
                    if (r) {
                        this.setState({ display: r, uploading: false })
                    }
                }).finally(() => {
                    this.setState({ uploading: false })
                });
            }

            e.value = "";
        }
    }

    render() {
        let { title, className, accept, multiple } = this.props;
        let { uploading, display } = this.state;
        title = title || strings.selectFile;
        className = className || '';

        return <div className={`image-upload ${className}`} style={this.props.style}  >
            <div className="item" ref={e => this.itemElement = e || this.itemElement}>
                {uploading ?
                    <>
                        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                        <span className="sr-only">{strings.uploading}</span>
                    </> :
                    display || <>
                        <i className="fa fa-plus fa-4x"></i>
                        <div>{title}</div>
                    </>}
                <input type="file" style={{}} accept={accept} ref={(e: HTMLInputElement) => this.fileRef(e)} multiple={multiple} />
            </div>
        </div>
    }


}


