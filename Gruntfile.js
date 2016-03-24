module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		jshint:{
			files:['Gruntfile.js','src/**/*.js']
		},
		watch:{
            files:'src/less/*.less',
            tasks:['less']
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
				src:'src/js/scripts.js',
				dest:'src/js/scripts.min.js'
			}

		},
		concat:{
			dist:{
				src:['src/js/*.js'],
				dest:'src/js/scripts.js'
			}
		},
		copy:{
			buildjs:{
				src:['src/js/*.min.js'],
				dest:'dist/js/'
			},
			buildcss:{
				src:['src/css/*.css'],
				dest:'dist/css/'
			},
			buildhtml:{
				src:['src/*.html'],
				dest:'dist/'
			}
		},
		browserSync: {
            		dev: {
                		bsFiles: {
                    			src : ['src/css/*.css','src/*.html','src/js/*.js']
                		},
                		options: {
                    			watchTask: true,
                    			server: './src'
                		}
            		}
        	}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['jshint','less','concat']);
	grunt.registerTask('dev',['browserSync:dev','watch']);
  grunt.registerTask('build',['uglify:build','copy:buildhtml','copy:buildjs','copy:buildcss']);
};
