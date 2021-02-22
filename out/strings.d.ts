interface Strings {
    selectImage: string;
    selectMax: string;
    cancel: string;
    confirm: string;
    deleteImageConfirm: string;
    imageUpload: string;
    noImageText: string;
}
declare let strings: {
    chinese: Strings;
    english: Strings;
};
export declare function getStrings(language?: keyof typeof strings): Strings;
export declare function setLanguage(value: keyof typeof strings): void;
export {};
