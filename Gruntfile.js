module.exports = function (grunt) {

    let build_dir = 'src';
    let release_dir = 'dist';
    let lib_name = 'chitu_admin'
    let lib_js_banner = license;

    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        browserify: {
            dist: {
                files: (function () {
                    let obj = {};
                    let filePath = `${build_dir}/${lib_name}.js`;
                    obj[filePath] = [`${build_dir}/index.js`];

                    return obj
                })(),
                options: {
                    transform: ['brfs'],
                    browserifyOptions: {
                        standalone: 'chitu_admin',
                    },
                    external: ['react', 'react-dom', 'maishu-chitu', 'maishu-chitu-react']
                }
            }
        },
    })

}