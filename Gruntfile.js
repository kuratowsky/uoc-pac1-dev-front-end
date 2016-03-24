module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		jshint:{
			files:['Gruntfile.js','src/**/*.js']
		},
		less:{
			development:{
			 	options:{
			 		paths:['src/less']
				},
				files:{
					"src/css/style.css":"src/less/style.less"
				}
			}
		},
		uglify:{
			build:{
				src:'scripts.js',
				dest:'scripts.min.js'
			}
			
		},
		concat:{
			dist:{
				src:['src/**/*.js],
				dest:'src/scripts.js'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default',['jshint','less']);
};
