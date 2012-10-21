/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    concat: {
      head: {
        src: ['build/js/lib/modernizr.min.js', 'build/js/load.js'],
        dest: 'build/js/head.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      coffee: {
        files: ['coffee/**/*.coffee'],
        tasks: ['coffee:compile', 'concat:head', 'growl:coffee']
      },
      compass: {
        files: ['sass/**/*.sass'],
        tasks: ['compass:dev', 'growl:compass']
      }
    },
    
    server: {
      base: './build'
    },

    coffee: {
      compile: {
        files: {
          'build/js/load.js': 'coffee/load.coffee',
          'build/js/app.js': ['coffee/app.coffee']
        }
      }
    },

    compass: {
      dev: {
        src: 'sass',
        dest: 'build/css',
        linecomments: true,
        outputstyle: 'expanded'
      },
      prod: {
        src: 'sass',
        dest: 'build/css',
        outputstyle: 'compressed',
        linecomments: false
      }
    },

    growl: {
      coffee: {
        title: 'CoffeeScript',
        message: 'Compiled!'
      },
      compass: {
        title: 'Compass',
        message: 'Compiled!'
      }
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-requirejs');

  // Default task.
  grunt.registerTask('default', 'server watch');

};
