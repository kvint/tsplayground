let gulp = require("gulp");
let webpack = require("gulp-webpack");
let wconfig = require("./webpack.config.js")

gulp.task("default", () => 
	gulp.src("src/index.ts")
		.pipe(webpack(wconfig))
		.pipe(gulp.dest("bin/"))
)