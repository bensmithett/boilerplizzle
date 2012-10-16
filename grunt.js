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
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      files: ['<config:coffee.app.src>'],
      tasks: 'coffee growl:coffee'
    },
    
    server: {
      base: './build'
    },

    coffee: {
      app: {
        src: ['coffee/**/*.coffee'],
        dest: 'build/js'
      }
    },

    growl : {
      coffee : {
        title   : 'CoffeeScript',
        message : 'Compiled!'
      }
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-growl');

  // Default task.
  grunt.registerTask('default', 'server watch');

};
