let gulp = require("gulp");
let webpack = require("webpack");
let webpackStram = require("webpack-stream");
let wconfig = require("./webpack.config.js")

gulp.task("default", () => 
	gulp.src("src/**/*")
		.pipe(webpackStram(wconfig, webpack))
		.pipe(gulp.dest("./bin/"))
)