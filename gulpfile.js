var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin');
var minifyCss = require('gulp-minify-css');                     //- 压缩CSS为一行；
var uglify = require('gulp-uglify'); 

gulp.task('extend-output', function () {
    gulp.src('./html/**/**/*.*')
        .pipe(gulp.dest('./output'))
})

gulp.task('extend-pro', ['extend-output', 'minify', 'cssMin', 'copyOtherFiles'], function () {})

gulp.task('default', ['extend-pro'])

gulp.task('minify', function() {
	console.log("minify");
  return gulp.src('./output/**/**/*.html')
    .pipe(htmlmin({
        collapseBooleanAttributes:true,
        collapseWhitespace:true,
        decodeEntities:true,
        html5:true,
        // lint:true,
        minifyCSS:true,
        minifyJS:true,
        processConditionalComments:true,
        removeAttributeQuotes:true,
        removeComments:true,
        removeEmptyAttributes:true,
        removeOptionalTags:true,
        removeRedundantAttributes:true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        removeTagWhitespace:true,
        sortAttributes:true,
        sortClassName:true,
        useShortDoctype:true
    }))
    .pipe(gulp.dest('./production'))
});

gulp.task('cssMin', function() {
    console.log('cssMin');
	return gulp.src('./output/**/**/**/*.css')
		.pipe(minifyCss())
    .pipe(gulp.dest('./production'))
});

//copy other files
gulp.task("copyOtherFiles", function() {
    console.log('copyOtherFiles');
    gulp.src([
    		'./output/**/**/*.*', 
    		'!' + './output/**/**/**/*.html',
			'!' + './output/**/**/**/*.css'
    	])
        .pipe(gulp.dest('./production'))
})
