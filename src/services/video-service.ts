import { Service } from "maishu-chitu-service";
import { pathConcat } from "maishu-toolkit";
import { ImageService } from "./image-service";

export class VideoService extends Service {

    protected url(path: string) {
        return pathConcat(ImageService.serviceHost, path);
    }

    async upload(video: File) {
        type Result = { name: string, filePath: string };
        let url = this.url("video/upload");
        var r = await this.postByFormData<Result>(url, { video });
        debugger;
        return r;
    }

    remove(filePath: string) {
        let url = this.url(pathConcat("video/remove", filePath));
        return this.postByJson(url, { id: filePath });
    }

    videoSource(name: string, appId: string) {
        let url = this.url(pathConcat("video", name)) + `?application-id=${appId}`;
        return url;
    }
}