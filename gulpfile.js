const gulp = require("gulp"),                   // Import (Gulp) Module From NodeJs Modules
  pugCompiler = require("gulp-pug"),            // Import (Pug) Package
  sassCompiler = require("gulp-sass"),          // Import (Sass) Package
  autoPrefixer = require("gulp-autoprefixer"),  // Import (AutoPrefixer) Package
  concat = require("gulp-concat"),              // Import (Concat) Package
  livereload = require("gulp-livereload"),      // Import (Live Reload) Package
  sourcemaps = require("gulp-sourcemaps"),      // Import (Sourcemaps) Package
  uglify = require("gulp-uglify"),              // Import (Uglify) Package
  notify = require("gulp-notify"),              // Import (Notify) Package
  zip = require("gulp-zip"),                    // Import (Zip) Package
  ftp = require("vinyl-ftp");                   // Import (vinyl-ftp) Package

// Start HTML(Pug) Files Compiling Task
gulp.task("html", function () {
  return gulp
    .src("stage/html/*.pug")
    .pipe(pugCompiler({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(notify("HTML Task Is Done...!"))
    .pipe(livereload());
});

// Strat Css(Sass) Files Compiling Task
gulp.task("css", function () {
  return gulp
    .src(["stage/css/**/*.css", "stage/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sassCompiler({ outputStyle: "expanded" }).on('error', sassCompiler.logError))
    .pipe(autoPrefixer())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

// Start Js Files Compiling Task
gulp.task("js", function () {
  return gulp
    /* 
      علامة التعجب قبل المسار معناها استثناءه من التاسك وتسمى بالانجليزية
      Exclude Files
      اذا كان التاسك متعدد المهام لاتنسى تحط التاسكات على شكل مصفوفة ***
    */
    .src("stage/js/*.js"/*, ["!stage/js/*.js"]*/)
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
});

// Compress Files Task
// gulp.task("compress", function () {
//   return gulp
//     .src("stage/**/*.*")
//     .pipe(zip("project-files.zip"))
//     .pipe(gulp.dest("."))
//     .pipe(notify("Project Files Compressed Done.."));
// });

// Start Auto Watch Task
gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  gulp.watch("stage/**/*.pug", gulp.series("html"));
  gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], gulp.series("css"));
  gulp.watch("stage/js/*.js", gulp.series("js"));
  // gulp.watch("stage/**/*.*", gulp.series("compress"));
  // gulp.watch("stage/**/*.*", gulp.series("deploy"));
});

// Upload Project To FTP Task
// gulp.task("deploy", function () {
//   var conn = ftp.create({
//     host: "WebSite Domain",
//     user: "",
//     password: "",
//     parallel: 10,
//   });

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

//   return gulp
//     .src("dist/**/*.*", { base: ".", buffer: false })
//     .pipe(conn.newer("/public_html")) // only upload newer files
//     .pipe(conn.dest("/public_html"))
//     .pipe(livereload());
// });

/*
  Default Task
    - Search On It
*/


/* 
  More Packages :

  - gulp-babel
    - Convert JavaScript Code With (ES6, ES7....) To Legacy Code Automaticly

  - gulp-replace
    - Replace Any String In Any File

  - gulp-load-plugins
    - (Read More About It)

  - gulp-rename
    - (Like: concat Package)

  - gulp-plumber
    - Work Continues Pipes When Show Any Error and prevent work it (The Next Pipes)
*/