
interface Strings {
    selectImage: string;
    selectMax: string;
    cancel: string;
    confirm: string;
    deleteImageConfirm: string;
    imageUpload: string;
    noImageText: string;
}

let chinese: Strings = {
    selectImage: "选择图片",
    selectMax: "最多可选",
    cancel: "取消",
    confirm: "确定",
    deleteImageConfirm: "确定删除该图片吗？",
    imageUpload: "图片上传",
    noImageText: "暂无图片"
}

let english: Strings = {
    selectImage: "Select Image",
    selectMax: "Select Max",
    cancel: "Cancel",
    confirm: "Confirm",
    deleteImageConfirm: "Are you sure delete the image?",
    imageUpload: "Image Upload",
    noImageText: "NO IMAGE"
}

let strings = { chinese, english, }

export function getStrings(language?: keyof typeof strings) {
    language = language || getLanguage();
    let r = strings[language];
    return r;
}

let language: keyof typeof strings = "chinese";
export function setLanguage(value: keyof typeof strings) {
    language = value;
}

function getLanguage() {
    return language;
}


