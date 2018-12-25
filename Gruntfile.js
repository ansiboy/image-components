module.exports = function (grunt) {

    let build_dir = 'out';
    let release_dir = 'dist';
    let lib_name = 'image_components'
    // let lib_js_banner = license;

    grunt.initConfig({
        browserify: {
            dist: {
                files: (function () {
                    let obj = {};
                    let filePath = `index.js`;
                    obj[filePath] = [`${build_dir}/index.js`];

                    return obj
                })(),
                options: {
                    // transform: ['brfs'],
                    browserifyOptions: {
                        standalone: `${lib_name}`,
                    },
                    external: ['react', 'react-dom', 'maishu-chitu', 'maishu-chitu-react', 'maishu-ui-toolkit']
                }
            }
        },
        shell: {
            src: {
                command: `tsc -p src`
            }
        },
    })

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['shell', 'browserify']);
}