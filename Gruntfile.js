module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      copy_build: {
        command: "mkdir -p public && rsync -avm --include='*/' --exclude='*.coffee' --exclude='*.s[ac]ss' app/ public/"
      }
    },
    coffee: {
      glob_to_multiple: {
        expand: true,
        cwd: 'app/coffee/',
        src: ['*.coffee'],
        dest: 'public/js/',
        ext: '.js'
      }
    },
    compass: {
      dev: {
        options: {
          environment: 'development',
          config: 'compass.rb'
        }
      },
      prod: {
        options: {
          environment: 'production',
          config: 'compass.rb'
        }
      }
    },
    watch: {
      coffee: {
        files: 'app/coffee/**/*.coffee',
        tasks: ['coffee:glob_to_multiple']
      },
      compass: {
        files: 'app/sass/**/*.sass',
        tasks: ['compass:dev']
      },
      everything_else: {
        files: ['app/**/*', '!app/sass/**/*.sass', '!app/coffee/**/*.coffee'],
        tasks: ['exec:copy_build']
      }
    },
    connect: {
      server: {
        options: {
          base: 'public',
          keepalive: true
        }
      }
    },
    clean: {
      tmp: 'tmp/',
      public: 'public/'
    },
    parallel: {
      server: [{
        grunt: true,
        args: ['connect']
      },
      {
        grunt: true,
        args: ['watch']
      }]
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-parallel');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  // grunt.registerTask('default', 'compile connect watch');
  grunt.registerTask('default', ['compile', 'parallel:server']);
  grunt.registerTask('compile', ['exec:copy_build', 'coffee:glob_to_multiple', 'clean:tmp', 'compass:dev']);
  // grunt.registerTask('build', 'clean:public exec:copy_build coffee:compile min:head min:app clean:tmp compass:prod growl:build');
};
