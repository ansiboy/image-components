let node_modules = '../node_modules'
requirejs.config({
    shim: {
        "maishu-node-auth": {
            deps: ['maishu-chitu-admin']
        },
        "maishu-chitu-react": {
            deps: ["react", "react-dom"]
        },
        "maishu-chitu-admin": {
            deps: ["maishu-chitu-react", "maishu-ui-toolkit"]
        }
    },
    paths: {
        css: '../lib/css',
        less: '../lib/require-less-0.1.5/less',
        lessc: '../lib/require-less-0.1.5/lessc',
        normalize: '../lib/require-less-0.1.5/normalize',
        text: 'lib/text',

        "react": `${node_modules}/react/umd/react.development`,
        "react-dom": `${node_modules}/react-dom/umd/react-dom.development`,
        "maishu-chitu": `${node_modules}/maishu-chitu/dist/chitu`,
        "maishu-chitu-admin": `${node_modules}/maishu-chitu-admin/dist/chitu_admin`,
        "maishu-chitu-react": `${node_modules}/maishu-chitu-react/out/index`,
        "maishu-dilu": `${node_modules}/maishu-dilu/dist/dilu`,
        "maishu-ui-toolkit": `${node_modules}/maishu-ui-toolkit/dist/index`,
        "maishu-node-auth": `${node_modules}/maishu-node-auth/dist/client/index`,
        "maishu-wuzhui": `${node_modules}/maishu-wuzhui/dist/wuzhui`,
        "maishu-wuzhui-helper": `${node_modules}/maishu-wuzhui-helper/dist/index`
    }
})

requirejs(['test'], function () {

})