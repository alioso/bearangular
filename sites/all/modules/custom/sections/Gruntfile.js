module.exports = function (grunt) {
  "use strict"

  //config
  grunt.initConfig ({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['./js/**/*.js', '!./js/sections.gen.js', '!js/keynav.js', '!js/angular-highlightjs.min.js'],
        tasks: ['jshint', 'concat:sections']
      }
    },
    concat: {
      sections: {
        src: ['./js/sections/**/*.js', '!./js/sections/sections.gen.js', '!./js/sections/keynav.js', '!./js/sections/angular-highlightjs.min.js'],
        dest: './js/sections.gen.js'
      },
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'js/**/*.js',
        '!js/keynav.js',
        '!js/**/*.gen.js',
        '!js/angular-highlightjs.min.js'
      ]
    },
  });
  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Default task
  grunt.registerTask('default', 'watch');
};
