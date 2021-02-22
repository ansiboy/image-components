"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLanguage = exports.getStrings = void 0;
let chinese = {
    selectImage: "选择图片",
    selectMax: "最多可选",
    cancel: "取消",
    confirm: "确定",
    deleteImageConfirm: "确定删除该图片吗？",
    imageUpload: "图片上传",
    noImageText: "暂无图片"
};
let english = {
    selectImage: "Select Image",
    selectMax: "Select Max",
    cancel: "Cancel",
    confirm: "Confirm",
    deleteImageConfirm: "Are you sure delete the image?",
    imageUpload: "Image Upload",
    noImageText: "NO IMAGE"
};
let strings = { chinese, english, };
function getStrings(language) {
    language = language || getLanguage();
    let r = strings[language];
    return r;
}
exports.getStrings = getStrings;
let language = "chinese";
function setLanguage(value) {
    language = value;
}
exports.setLanguage = setLanguage;
function getLanguage() {
    return language;
}
