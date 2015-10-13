module.exports = function (grunt) {



    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                seperator:';'
            },
            dist: {
                src: ['node_modules/**/*.js'],
                dest:'dist/<%= pkg.name %>.js'
            }
        },
        sass: {
            compile: {
                files: {
                    'Styles/main.css': 'Styles/*.scss'
                }
            },
            options: {
                sourceMap: true
            }
        },
        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    sassDir: 'scss',
                    cssDir: 'css',
                    environment: 'production'
                }
            },
            dev: {                    // Another target
                options: {
                    sassDir: 'scss',
                    cssDir: 'css'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'Min/output.min.js': ['Scripts/*.js']
                }
            }
        },
        watch: {
            sass: {
                files: ['Styles/*.scss'],
                tasks: ['scss']
            }
        }
    });

    grunt.registerTask('default', ['sass', 'compass', 'uglify', 'watch']);
};