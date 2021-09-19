import { Service } from "maishu-chitu-service";
import { pathConcat } from "maishu-toolkit";
import { ImageService } from "./image-service";

export class VideoService extends Service {

    protected url(path: string) {
        return VideoService.url(path);
    }

    protected static url(path: string) {
        return pathConcat(ImageService.serviceHost, "video", path);
    }

    upload(video: File) {
        let url = this.url("upload");
        let r = this.postByFormData<{}>(url, { video, name: video.name });
        return r;
    }
}