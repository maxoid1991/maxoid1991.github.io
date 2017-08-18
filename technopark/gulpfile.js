var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	uglify      = require('gulp-uglify'),
	concat      = require('gulp-concat'),
	del         = require('del'),
	imagemin    = require('gulp-imagemin'),
	pngquant    = require('imagemin-pngquant'),
	cache       = require('gulp-cache'),
	cssnano     = require('gulp-cssnano'), 
    rename      = require('gulp-rename'); 


// Path

var path = {
	jade: {
		src: 'app/jade/*.jade',
		html: 'app'
	},

	sass: {
		src: 'app/sass/*.sass',
		css: 'app/css'
	},

	js: {
		path1: 'app/libs/jquery/dist/jquery.js',
		path2: 'app/libs/angular/angular.js',
		path3: 'app/js/script/*.js',
		dest: 'app/js'
	}
}

//Tasks:

//Jade to html

gulp.task('jade', function(){
	var YOUR_LOCALS = {};

	gulp.src(path.jade.src) // Берем от сюда jade
		.pipe(jade({
			locals: YOUR_LOCALS,
			pretty: '	',
		}))
	.pipe(gulp.dest(path.jade.html)) // Компилируем сюда html
});

//Sass to css

gulp.task('sass', function(){ 
    return gulp.src(path.sass.src) // Берем от сюда sass
        .pipe(sass()) 
        .pipe(gulp.dest(path.sass.css)) // Компилируем сюда css
});

//browser Sync - auto reload

gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: 'app' 
        },
        notify: false 
    });
});

//Min css libraries

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/libs/bootstrap/dist/css/bootstrap.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

//Min and concat js libraries

gulp.task('libs', function() {
    return gulp.src([ // берем библиотеки
    	  path.js.path1,
    	  path.js.path2,
        ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest(path.js.dest)); // Выгружаем в папку app/js
});

//Min and concat js files
//From scripts to scripts_min.js

gulp.task('scripts', function() {
    return gulp.src([ // берем скрипты
    	  path.js.path3,
        ])
        .pipe(concat('scripts_min.js')) // Собираем их в кучу в новом файле scripts_min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest(path.js.dest)); // Выгружаем в папку app/js
});


//Min images

gulp.task('img', function() {
    return gulp.src('app/img/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

//Watch task

gulp.task('watch', ['browser-sync', 'jade', 'sass', 'libs', 'scripts', 'css-libs'], function() { // При запуске watch выполняеются все таски в скобках
    gulp.watch(path.sass.src, ['sass']); // Наблюдение за sass, если есть, то автоматическое перекомпилирование в css
    gulp.watch(path.jade.src, ['jade']); // Наблюдение за jade, если есть, то автоматическое перекомпилирование в html
    gulp.watch(path.js.path3, ['scripts']); //Наблюдать за  скриптами и сжимай минифицируй
    gulp.watch('app/js/*.js', browserSync.reload); //обновляй браузер если есть изменения
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/css/*.css', browserSync.reload);

});

//Default task

gulp.task('default', ['jade', 'sass', 'scripts', 'libs', 'browser-sync', 'watch', 'css-libs']);

//Delete dist 
gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});


//Build

gulp.task('build', ['clean', 'sass', 'jade', 'scripts', 'libs', 'img', 'css-libs'], function(){
	
	var buildJS = gulp.src('app/js/*.js')
	.pipe(gulp.dest('dist/js'))

	var buildCSS = gulp.src('app/css/*.css')
	.pipe(gulp.dest('dist/css'))

	var buildHTML = gulp.src('app/*.html')
	.pipe(gulp.dest('dist/'))

    var buildIMG = gulp.src('app/images/**')
    .pipe(gulp.dest('dist/images'))

    var buildFonts = gulp.src('app/fonts/**')
    .pipe(gulp.dest('dist/fonts'))
});





