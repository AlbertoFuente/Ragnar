module.exports = function(grunt){

    grunt.initConfig({

        uglify: {
            my_target: {
                files: {
                    'js/scripts.min.js': ['vendor/*.js','components/*.js','examples/js/*.js']
                }
            }
        },
        watch: {

            scripts: {

                files: ['vendor/*.js','components/*.js','examples/js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }

            }
        },
        browserSync: {

            dev: {

                bsFiles: {
                    src : [
                        'components/*.js',
                        'examples/js/*.js',
                        'JSON/*.json',
                        'vendor/*.js',
                        'styles/*.css',
                        'styles/*.scss',
                        'examples/*.html'
                    ]
                },

                options: {
                    watchTask: true,
                    debugInfo: true,
                    logConnections: true,
                    notify: true,
                    http: true,
                    port: "63342",
                    proxy: "/Ragnar/examples/index.html",
                    ghostMode: {
                        scroll: true,
                        links: true,
                        forms: true
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ["browserSync", "watch"]);
};
