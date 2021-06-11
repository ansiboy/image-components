import { DataSource } from "maishu-toolkit";
import React = require("react");
import { DataSourcePagingBar } from "./number-paging-bar";

export interface Props<T> {
    dataSource: DataSource<T>
}

export class PagingBar<T> extends React.Component<Props<T>> {
    #pagingBar: DataSourcePagingBar;

    private pagingBarRef(e: HTMLElement | null) {
        if (!e || this.#pagingBar) return;

        this.#pagingBar = new DataSourcePagingBar({
            dataSource: this.props.dataSource,
            element: e,
            pagerSettings: {
                activeButtonClassName: 'active',
                buttonWrapper: 'li',
                buttonContainerWraper: 'ul',
                showTotal: false
            },
        });

        let ul = e.querySelector('ul');
        if (ul)
            ul.className = "pagination";
    }

    render() {
        return <div ref={e => this.pagingBarRef(e)}>

        </div>
    }
}