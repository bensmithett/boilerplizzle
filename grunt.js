/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      head: {
        src: ['app/js/vendor/modernizr*.js', 'tmp/load.js'],
        dest: 'public/js/head.js'
      }
    },

    min: {
      head: {
        src: ['app/js/vendor/modernizr*.js', 'tmp/load.js'],
        dest: 'public/js/head.js'
      },
      app: {
        src: 'public/js/app.js',
        dest: 'public/js/app.js'
      }
    },

    watch: {
      coffee: {
        files: ['app/coffee/**/*.coffee', 'spec/**/*.coffee'],
        tasks: ['coffee:compile', 'concat:head', 'clean:tmp', 'growl:coffee']
      },
      compass: {
        files: ['app/sass/**/*.sass'],
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
          'tmp/load.js': 'app/coffee/load.coffee',
          'public/js/app.js': ['app/coffee/app.coffee'],
          'spec/js/*.js': 'spec/**/*.coffee'
        }
      }
    },

    compass: {
      dev: {
        src: 'app/sass/screen.sass',
        dest: 'public/css',
        linecomments: true,
        outputstyle: 'expanded'
      },
      prod: {
        src: 'app/sass/screen.sass',
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
      },
      build: {
        title: 'Build complete',
        message: 'The public/ folder is ready to deploy!'
      }
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-exec');

  // Default task.
  grunt.registerTask('default', 'compile server watch');
  grunt.registerTask('compile', 'coffee:compile concat:head clean:tmp growl:coffee compass:dev growl:compass');
  grunt.registerTask('build', 'coffee:compile min:head min:app clean:tmp compass:prod growl:build');
};
