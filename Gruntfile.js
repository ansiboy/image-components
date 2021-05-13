const webpack_src = require('./webpack.config.js');
let webpack_min = Object.assign({}, webpack_src, {
    output: Object.assign({}, webpack_src.output, { filename: "index.min.js" }),
    mode: 'production',
})


module.exports = function (grunt) {
    grunt.initConfig({
        shell: {
            src: {
                command: `tsc -p src`
            }
        },
        webpack: {
            webpack_src,
            webpack_min,
        },
    })

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['shell', 'webpack']);
}