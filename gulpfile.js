var gulp = require('gulp');

gulp.task('task', ['task1', 'task2', 'task-kill', 'task3']);

gulp.task('task1', function() {
  console.log('i am task1!!');
});

gulp.task('task2', function() {
  console.log('i am task2!!');
});

gulp.task('task-kill', function() {
  console.log("before kill task");

  process.exit(0);

  console.log("after kill task");
});

gulp.task('task3', function() {
  console.log('i am task3!!');
});
