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
      },
      html: {
        files: ['app/**/*.html'],
        tasks: ['exec:copy_build', 'growl:html']
      }
    },

    clean: {
      tmp: 'tmp/',
      public: 'public/'
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
        environment: 'development',
        config: 'compass.rb'
      },
      prod: {
        environment: 'production',
        config: 'compass.rb'
      }
    },

    exec: {
      copy_build: {
        command: "mkdir -p public && rsync -avm --include='*/' --exclude='*.coffee' --exclude='*.s[ac]ss' app/ public/"
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
      html: {
        title: 'HTML',
        message: 'HTML copied!'
      },      
      build: {
        title: 'Build complete',
        message: 'The public/ folder is ready to deploy!'
      }
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-clean');
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-growl');

  // Default task.
  grunt.registerTask('default', 'compile server watch');
  grunt.registerTask('compile', 'exec:copy_build coffee:compile concat:head clean:tmp growl:coffee compass:dev growl:compass');
  grunt.registerTask('build', 'clean:public exec:copy_build coffee:compile min:head min:app clean:tmp compass:prod growl:build');
};
