const webpack_src = require('./webpack.config.js');
let webpack_min = Object.assign({}, webpack_src);
webpack_min.output = Object.assign({}, webpack_src.output, { filename: "index.min.js" });
webpack_min.mode = "production";

const path = require("path");

module.exports = function (grunt) {
    grunt.initConfig({
        shell: {
            src: {
                command: `tsc -p src`
            },
            demo: {
                command: "node-static ./",
                options: {
                    execOptions: {
                        cwd: path.join(__dirname, "samples")
                    }
                }
            },
            chrome: {
                command: "start chrome http://127.0.0.1:49532",
            }
        },
        webpack: {
            src: webpack_src,
            min: webpack_min,
        },
        open: {
            demo: {
                path: `http://127.0.0.1:49532`,
                app: 'Google Chrome'
            }
        }
    })

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['shell:src', 'webpack']);
    grunt.registerTask('demo', ["shell:chrome", "shell:demo"])
}