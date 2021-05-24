import { ModalDialog } from "maishu-image-components";
import * as React from "react";

export default function () {
    let dialog: ModalDialog;

    return <div className="container">
        <h2>缩略图 - 默认</h2>
        <hr />
        <pre>{`<ModalDialog title="对话框" ref={e => dialog = e || dialog} >
    <form className="form-horizontal">
        <div className="form-group">
            <label className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
            </div>
        </div>
        <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" /> Remember me
                </label>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Sign in</button>
            </div>
        </div>F
    </form>
</ModalDialog>
<button className="btn btn-primary" onClick={() => dialog.show()}>Show</button>`   }
        </pre>
        <ModalDialog title="对话框" ref={e => dialog = e || dialog} >
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Sign in</button>
                    </div>
                </div>
            </form>
        </ModalDialog>
        <button className="btn btn-primary" onClick={() => dialog.show()}>Show</button>
    </div>
}