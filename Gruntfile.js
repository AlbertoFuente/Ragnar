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

        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
