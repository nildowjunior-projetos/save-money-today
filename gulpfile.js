const gulp = require("gulp");
const del = require("del");
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");

gulp.task("clean", () => {
    return del([
        "dist/**/*"
    ]);
});

gulp.task("copyCss", () => {
    return gulp.src(["node_modules/bootstrap/dist/css/bootstrap.css","css/principal.css"])
        .pipe(gulp.dest('dist/css/'));
});

gulp.task("default", ["clean", "copyCss"], () => {

    return browserify({entries: "src/js/", extensions: [".js"]})
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist"));
});

// gulp.watch("src/js/*.js", ["default"]);