/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    // Task configuration.
    webpack: {
      dist: require("./webpack.config.js")
    },
    uglify: {
      options: {
        //banner: '<%= banner %>'
      },
      dist: {
        src: './build/bundle.js',
        dest:'./build/bundle.min.js'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    },
    eslint: {
      target: [        
        'dev/**/*.js',
        '__tests__/**/*.js',
      ]
    },
    jest: {
      options: {
        coverage: true,
        testPathPattern: /.*-test.js/
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-jest');

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('test', ['jest']);
  
  // Default task.
  grunt.registerTask('default', ['webpack', 'uglify', 'cssmin', 'eslint', 'jest']);

};
