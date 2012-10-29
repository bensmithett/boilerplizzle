/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      head: {
        src: ['public/js/vendor/modernizr*.js', 'tmp/load.js'],
        dest: 'public/js/head.js'
      }
    },

    min: {
      head: {
        src: ['public/js/vendor/modernizr*.js', 'tmp/load.js'],
        dest: 'public/js/head.js'
      },
      app: {
        src: 'public/js/app.js',
        dest: 'public/js/app.js'
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
        environment: 'development',
        config: 'compass.rb'
      },
      prod: {
        environment: 'production',
        config: 'compass.rb'
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
  grunt.loadNpmTasks('grunt-requirejs');

  // Default task.
  grunt.registerTask('compile', 'coffee:compile concat:head clean:tmp growl:coffee compass:dev growl:compass');
  grunt.registerTask('default', 'compile server watch');
  grunt.registerTask('build', 'coffee:compile min:head min:app clean:tmp compass-clean compass:prod growl:build');
};
