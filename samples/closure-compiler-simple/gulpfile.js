const gulp = require('gulp');
const closureCompiler = require('google-closure-compiler').gulp();
const sourceFiles = [
  'node_modules/lodash/**/*.js',
  'node_modules/lodash/package.json',
  'src/**.js'
];

gulp.task('bundle', function () {
  return gulp.src(sourceFiles, {base: './'})
      .pipe(closureCompiler({
          process_common_js_modules: true,
          dependency_mode: 'STRICT',
          compilation_level: 'SIMPLE',
          entry_point: 'src/main',
          // warning_level: 'VERBOSE',
          language_in: 'ECMASCRIPT6',
          language_out: 'ECMASCRIPT5',
          module_resolution: 'NODE',
          // generate_exports: true,
          output_wrapper: '(function(){\n%output%\n}).call(this)',
          js_output_file: 'bundle.min.js',
        }))
      .pipe(gulp.dest('./'));
});
