import { showImageDialog } from "maishu-image-components";
import * as React from "react";

export default function () {
    return <div className="container">
        <button className="btn btn-primary" onClick={() => showImageDialog(10, (imageIds) => {
            alert(imageIds.join(","))
        })}>Show</button>
    </div>
}