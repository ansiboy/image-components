import { DataSource } from "maishu-toolkit";
import * as React from "react";
import { getStrings } from "../strings";
import { ModalDialog, ModalDialogProps } from "./modal-dialog";
import { PagingBar } from "../paging-bar";
import "../../content/data-source-dialog.less";

interface Props<T> extends Exclude<ModalDialogProps, "onConfirm"> {
    dataSource: DataSource<T>,
    pageItemsCount: number,
}

interface State<T> {
    items?: T[]
}

let strings = getStrings();
export let DataSourceDialogContext = React.createContext<{ dataItem: any, index: number }>({ dataItem: null, index: -1 });


export class DataSourceDialog<T> extends React.Component<Props<T>, State<T>> {
    #dialog: ModalDialog;

    constructor(props: Props<T>) {
        super(props);

        this.state = {};

        this.props.dataSource.selecting.add(e => {
            this.setState({ items: undefined });
        })

        this.props.dataSource.selected.add(e => {
            this.setState({ items: e.selectResult.dataItems });
        })

        this.props.dataSource.inserted.add(args => {
            this.state.items?.push(args.dataItem);
            this.setState({ items: this.state.items });
        })
    }

    get element() {
        return this.#dialog.element;
    }

    show() {

        this.props.dataSource.select({
            maximumRows: this.props.pageItemsCount,
        })
        this.#dialog.show();
    }

    hide() {
        this.#dialog.hide();
    }

    confirm() {
        if (this.props.onConfirm) {
            this.props.onConfirm(this)
        }
    }

    renderBody() {
        let { items } = this.state;
        if (items === undefined) {
            return <div className="empty">
                {strings.dataLoading}
            </div>
        }

        if (items == null || items.length == 0) {
            return <div className="empty">
                {strings.dataEmpty}
            </div>
        }

        return items.map((o, i) => <DataSourceDialogContext.Provider key={i} value={{ dataItem: o, index: i }}>
            {this.props.children}
        </DataSourceDialogContext.Provider>);

    }

    componentDidMount() {

    }

    render() {
        return <ModalDialog {...this.props} className="data-source-dialog" ref={e => this.#dialog = e || this.#dialog}>
            <div className="modal-body">
                {this.renderBody()}
            </div>
            <div className="modal-footer" style={{ marginTop: 0 }}>
                <PagingBar<T> dataSource={this.props.dataSource} />
                <button type="button" className="btn btn-default" data-dismiss="modal">
                    {this.props.cancelButtonText || "取消"}
                </button>
                <button type="button" className="btn btn-primary"
                    onClick={() => this.confirm()}>
                    {this.props.confirmButtonText || "确定"}
                </button>
            </div>
        </ModalDialog>
    }


}

export type DataSourceDialogProps<T> = Props<T>;