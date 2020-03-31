var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");


// Put this after including our dependencies
var paths = {
    styles: {
        src: "./sass/*.scss",
        dest: "./"
    }
};

function build() {
    return (
        gulp
            .src(paths.styles.src)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
            //.pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.styles.dest))
    );
}
exports.build = build;

function watch(){
    gulp.watch('./sass/*.scss', build)
}
    
exports.watch = watch;