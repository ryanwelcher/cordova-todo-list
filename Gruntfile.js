

module.exports = function(grunt) {

	grunt.initConfig({
		exec: {
			prepare: {
				cmd: 'cordova prepare'
			}
		},
		watch : {
			scripts: {
				files: ['www/**/*.*'],
				tasks: ['exec:prepare'],
				options: {
					spawn: false
				}
			},
		}
	});

	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask( 'default', ['exec:prepare'] );
};