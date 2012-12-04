module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {
        exports: true
      }
    },
    parseunicode: {
      dist_utf8: {
        src: ['test/**/*utf8.min.js'],
        options: {
          charset: 'utf8',
          type: 'js'
        }
      },
	  dist_gbk: {
        src: ['test/**/*gbk.min.js'],
        options: {
          charset: 'gbk',
          type: 'js'
        }
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('default', 'parseunicode');

};
