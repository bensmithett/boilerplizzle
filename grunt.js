/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:lib/<%= pkg.name %>.js>'],
        dest: 'dist/<%= pkg.name %>.js'
      },
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
