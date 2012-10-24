/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    concat: {
      head: {
        src: ['public/js/vendor/modernizr*.js', 'tmp/load.js'],
        dest: 'public/js/head.js'
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
        files: ['coffee/**/*.coffee', 'spec/**/*.coffee'],
        tasks: ['coffee:compile', 'concat:head', 'clean:tmp', 'growl:coffee']
      },
      compass: {
        files: ['sass/**/*.sass'],
        tasks: ['compass:dev', 'growl:compass']
      }
    },

    clean: {
      tmp: 'tmp/'
    },
    
    server: {
      base: './public'
    },

    coffee: {
      compile: {
        files: {
          'tmp/load.js': 'coffee/load.coffee',
          'public/js/app.js': ['coffee/app.coffee'],
          'spec/js/*.js': 'spec/**/*.coffee'
        }
      }
    },

    compass: {
      dev: {
        src: 'sass/screen.sass',
        dest: 'public/css',
        linecomments: true,
        outputstyle: 'expanded'
      },
      prod: {
        src: 'sass/screen.sass',
        dest: 'public/css',
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
  grunt.loadNpmTasks('grunt-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-requirejs');

  // Default task.
  grunt.registerTask('compile', 'coffee:compile concat:head clean:tmp growl:coffee compass:dev growl:compass')
  grunt.registerTask('default', 'compile server watch');

};
