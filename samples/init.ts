import "font-awesome/css/font-awesome.css";
import "bootstrap/less/bootstrap.less";

import { ImageService } from "maishu-image-components";

ImageService.serviceHost =  "http://image.finememo.com";//"http://127.0.0.1:48628";//
ImageService.headers["application-id"] = "7bbfa36c-8115-47ad-8d47-9e52b58e7efd";

export default function () {

}