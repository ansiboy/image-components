import { ModalDialog, DataSourceDialog, ImageService, ImageThumber, DataSourceDialogContext } from "maishu-image-components";
import { DataSource, guid } from "maishu-toolkit";
import * as React from "react";
import "./dialog-data-source.scss";

export default function () {

    var dialog: DataSourceDialog<any>;
    var imageService = new ImageService();
    return <div className="container dialog-data-source">
        <h2>数据源对话框</h2>
        <hr />
        <DataSourceDialog title="图片选择" pageItemsCount={15} dataSource={createImageDataSource()} isLarge={true} ref={e => dialog = e || dialog}>
            <DataSourceDialogContext.Consumer>
                {args => <ImageThumber imagePath={imageService.imageSource(args.dataItem.id, 120, 120)} />}
            </DataSourceDialogContext.Consumer>
        </DataSourceDialog>
        <button className="btn btn-primary" onClick={() => dialog.show()}>显示对话框</button>
    </div >
}

function createImageDataSource() {
    let station = new ImageService();

    let dataSource = new DataSource<{ id: string }>({
        primaryKeys: ['id'],
        async select(args) {
            let result = await station.list(args);
            return result;
        },
        async delete(item) {
            let result = await station.remove(item.id);
            return result;
        },
        async insert(item) {
            console.assert((item as any).data != null);
            let result = await station.upload((item as any).data);
            Object.assign(item, result);
            return result;
        }
    })

    return dataSource;
}