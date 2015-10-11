/*!
 * Zafree's Gruntfile
 * http://zafree.github.io/salt
 * Copyright 2014-2015 Zafree
 * Licensed under MIT (https://github.com/zafree/salt/blob/master/LICENSE)
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	  banner: '/*!\n' +
            ' * Salt v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',

    less: {
      development: {
        options: {
          banner: '<%= banner %>\n',
          compress: false,
          yuicompress: true,
          optimization: 2,
        },
        files: {
          "dist/css/<%= pkg.name %>.css": "less/bootaide.less"
        },
        build: {
          src: ['less/bootaide.less'],
          dest: 'dist/css/<%= pkg.name %>.css'
        }
      }
    },

    cssmin: {
    	options: {
        banner: '<%= banner %>\n',
	    },
    	dist: {
        src: ['dist/css/<%= pkg.name %>.css'],
        dest: 'dist/css/<%= pkg.name %>.min.css'
	    }
    },

    concat: {
    	options: {
	      banner: '<%= banner %>\n',
	      separator: ';',
	    },
	    dist: {
	      src: ['js/**.js'],
	      dest: 'dist/js/<%= pkg.name %>.js'
	    },
	  },

    uglify: {
		  options: {
	        banner: '<%= banner %>',
	    },
	    dist: {
	        src: ['dist/js/<%= pkg.name %>.js'],
	        dest: 'dist/js/<%= pkg.name %>.min.js'
	    }
    },

	  watch: {
      less: {
  			files: 'less/**/*.less',
  			tasks: ['less'],
        options: {
          livereload: true
        }
  		},
  		cssmin: {
  			files: 'less/**/*.less',
  			tasks: ['cssmin'],
        options: {
          livereload: true
        }
  		},
      concat: {
  			files: 'js/*.js',
  			tasks: ['concat'],
        options: {
          livereload: true
        }
  		},
  		uglify: {
  			files: 'js/*.js',
  			tasks: ['uglify'],
        options: {
          livereload: true
        }
  		},
      html: {
        files: ['**/*.html'],
        options: {
          spawn: false,
          livereload: true
        }
      }
	  },

    connect: {
      server: {
        options: {
          port: 9090,
          base: '.',
          open: true,
          livereload: true
        }
      }
    }
    });

    // Load the plugin that provides the task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('build', ['less','cssmin','concat','uglify']);

    // Creates the `server` task
    grunt.registerTask('serve', ['connect', 'watch']);

};
