module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
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
