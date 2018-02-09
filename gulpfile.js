const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

const serverConfig = {
	server: {
		baseDir: "./"
	},
	tunnel: true,
	host: 'localhost',
	port: 9000,
	logPrefix: "gulp_project"
};

const path = {
    watch: {
        html: './*.html',
        css: './css/*.css',
        js: './js/*.js'
    }
};

gulp.task('watch', () => {
    watch([path.watch.html]).pipe(reload({
		stream: true
	}));
    watch([path.watch.css]).pipe(reload({
		stream: true
	}));;
    watch([path.watch.js]).pipe(reload({
		stream: true
	}));;
});

gulp.task('webserver', () => {
	browserSync(serverConfig);
});

gulp.task('default', ['webserver', 'watch']);
