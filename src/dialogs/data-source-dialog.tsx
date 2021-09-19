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
export let DataSourceDialogTop = React.createContext<{}>({});
export let DataSourceDialogBottom = React.createContext<{}>({});

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
        let children = this.props.children ? Array.isArray(this.props.children) ? this.props.children : [this.props.children] : [];
        let itemElement = children.filter(o => (o as React.ReactElement).type == DataSourceDialogContext.Consumer)[0];
        if (!itemElement)
            return null;

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
            {itemElement}
        </DataSourceDialogContext.Provider>);

    }

    componentDidMount() {

    }

    render() {
        let children = this.props.children ? Array.isArray(this.props.children) ? this.props.children : [this.props.children] : [];
        let topElement = children.filter(o => (o as React.ReactElement).type == DataSourceDialogTop.Consumer)[0];
        let bottomElement = children.filter(o => (o as React.ReactElement).type == DataSourceDialogBottom.Consumer)[0];

        return <ModalDialog {...this.props} className="data-source-dialog" ref={e => this.#dialog = e || this.#dialog}>
            <div className="modal-body">
                <div className="form-group">
                    <DataSourceDialogTop.Provider value={{}}>
                        {topElement}
                    </DataSourceDialogTop.Provider>
                </div>
                <div className="form-group">
                    {this.renderBody()}
                </div>
                <div className="form-group">
                    <DataSourceDialogBottom.Provider value={{}}>
                        {bottomElement}
                    </DataSourceDialogBottom.Provider>
                </div>
            </div>
            <div className="modal-footer" style={{ marginTop: 0 }}>
                <PagingBar<T> dataSource={this.props.dataSource} />
                <button type="button" className="btn btn-default" data-dismiss="modal">
                    <i className="glyphicon glyphicon-repeat" />
                    <span>{this.props.cancelButtonText || "取消"}</span>
                </button>
                <button type="button" className="btn btn-primary"
                    onClick={() => this.confirm()}>
                    <i className="glyphicon glyphicon-ok" />
                    <span>{this.props.confirmButtonText || "确定"}</span>
                </button>
            </div>
        </ModalDialog>
    }


}

export type DataSourceDialogProps<T> = Props<T>;