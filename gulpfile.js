var gulp = require("gulp");
var browserify = require("gulp-browserify2");
var uglify = require("gulp-uglify");
var plumber = require("gulp-plumber");
var browser = require("browser-sync");

var src = {
    html: ["app/**/*.html"],
    image: ["app/**/*.jpg", "app/**/*.ico", "app/**/*.png", "app/**/*.gif"],
    js: ["app/js/**/*.js"],
    dist: ["dist/**/*"]
};

gulp.task("html", function() {
    gulp.src(src.html, {base: "app"})
        .pipe(plumber())
        .pipe(gulp.dest("dist"));
});

gulp.task("image", function() {
    gulp.src(src.image, {base: "app"})
        .pipe(plumber())
        .pipe(gulp.dest("dist"));
});

gulp.task("js", function() {
    gulp.src(src.js)
        .pipe(plumber())
        .pipe(browserify({transform: ["debowerify"]}))
        .pipe(gulp.dest('dist'));
});

gulp.task("js-production", function() {
    gulp.src(src.js)
        .pipe(plumber())
        .pipe(browserify({transform: ["debowerify"]}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task("server", function() {
    browser({
        server: "./dist"
    });
    gulp.watch(src.dist).on("change", browser.reload);
});

gulp.task("build", ["js", "html", "image"]);

gulp.task("watch", ["server"], function() {
    gulp.watch(src.js, ["js"]);
    gulp.watch(src.html, ["html"]);
    gulp.watch(src.image, ["image"]);
});

gulp.task("default", ["watch"]);

