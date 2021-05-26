import { hideDialog, showDialog } from "maishu-ui-toolkit";
import * as React from "react";

interface Props {
    title?: string
    cancelButtonText?: string
    confirmButtonText?: string
    onConfirm?(): void
    isLarge?: boolean
    className?: string
}

export class ModalDialog extends React.Component<Props> {
    #element: HTMLElement;

    get element() {
        return this.#element;
    }

    /** 显示对话框 */
    show() {
        showDialog(this.#element);
    }

    /** 隐藏对话框 */
    hide() {
        hideDialog(this.#element);
    }

    render() {
        return <div className={`modal fade ${this.props.className || ""}`} ref={e => this.#element = e || this.#element}>
            <div className={`modal-dialog ${this.props.isLarge ? "modal-lg" : ""}`}>
                <div className="modal-content">
                    {this.header()}
                    {this.body()}
                    {this.footer()}
                </div>
            </div>
        </div>
    }

    private findChild(filter: (o: React.ReactElement) => boolean) {
        return this.findChildren(filter)[0];
    }

    private findChildren(filter: (o: React.ReactElement) => boolean): React.ReactElement[] {
        if (this.props.children == null)
            return [];

        let elements = (Array.isArray(this.props.children) ? this.props.children : [this.props.children]) as React.ReactElement[];
        let r = elements.filter(filter);
        return r;
    }

    private footer() {
        let footer = this.findChild((o) => o.props?.className == "modal-footer");
        if (footer == null) {
            footer = <div className="modal-footer" style={{ marginTop: 0 }}>
                <button type="button" className="btn btn-default" data-dismiss="modal">
                    {this.props.cancelButtonText || "取消"}
                </button>
                <button type="button" className="btn btn-primary"
                    onClick={() => this.props.onConfirm ? this.props.onConfirm() : null}>
                    {this.props.confirmButtonText || "确定"}
                </button>
            </div>
        }

        return footer;
    }

    private header() {
        let header = this.findChild((o) => o.props?.className == "modal-header");
        if (header == null) {
            header = <div className="modal-header">
                <button type="button" className="btn close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                    <span className="sr-only">Close</span>
                </button>
                <h4 className="modal-title">{this.props.title || ""}</h4>
            </div>
        }

        return header;
    }

    private body() {
        let body = this.findChild((o) => o.type == "div" && o.props?.className == "modal-body");
        if (body == null) {
            let excludeClassNames = ["modal-header", "modal-body", "modal-footer"]
            let children = this.findChildren((o) => excludeClassNames.indexOf(o.props?.className) < 0);
            body = <div className="modal-body">
                {children}
            </div>
        }

        return body;
    }
}

export type ModalDialogProps = Props;