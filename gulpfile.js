const gulp              = require('gulp');
const browserSync       = require('browser-sync');
const sass              = require('gulp-sass')(require('sass'));
const cleanCSS          = require('gulp-clean-css');
const autoprefixer      = require('gulp-autoprefixer');
const rename            = require("gulp-rename");
const webpack           = require("webpack-stream");

// live server
gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/pages/**/*.html").on('change', browserSync.reload);
});

// tasks
gulp.task('html', function () {
    return gulp.src("src/pages/**/*.html")
        .pipe(gulp.dest("dist/"));
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task("scripts", () => {
    return gulp.src("src/js/**/*.js")
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'bundle.js'
            },
            watch: false,
            devtool: "source-map",
            // module: {
            //     rules: [{
            //         test: /\.m?js$/,
            //         exclude: /(node_modules|bower_components)/,
            //         use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: [['@babel/preset-env', {
            //                 debug: true,
            //                 corejs: 3,
            //                 useBuiltIns: "usage"
            //             }]]
            //         }
            //         }
            //     }]
            // }
        }))
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('favicon', function () {
    return gulp.src("src/favicon/*")
        .pipe(gulp.dest("dist/favicon"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
});

// watch
gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/pages/**/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/js/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("src/icons/**/*").on('add', gulp.parallel('icons'));
    gulp.watch("src/favicon/*").on('add', gulp.parallel('favicon'));
    gulp.watch("src/img/**/*").on('add', gulp.parallel('images'));
});

// combine
gulp.task('default', gulp.parallel('watch', 'server', 'html', 'styles', 'scripts', 'images', 'icons', 'favicon'));