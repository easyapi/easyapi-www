var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var less = require('gulp-less');
var header = require('gulp-header');
var nano = require('gulp-cssnano');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var concat = require("gulp-concat"); //文件合并
var pkg = require('./package.json');
var runSequence = require('gulp-sequence');
var plumber = require('gulp-plumber');
var flatten = require('gulp-flatten');
var yargs = require('yargs')

.options({
    'w': {
        alias: 'watch',
        type: 'boolean'
    },
    's': {
        alias: 'server',
        type: 'boolean'
    },
    'p': {
        alias: 'port',
        type: 'number'
    }
}).argv;

var option = {
    base: 'src'
};
var build = __dirname + '/';

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}


var day = getNowFormatDate();

gulp.task('build:style:less', function () {
    return     gulp.src('static/less/main.less', option)
        .pipe(plumber())
        .pipe(less().on('error', function (e) {
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(flatten())
        .pipe(gulp.dest('static/css/'));
});




gulp.task("build:style:min",function () {
    var banner = [
        '/*!',
        ' * 官网样式表 v<%= pkg.version %>',
        ' * @author easyapi',
        ' * @email leida@easyapi.com',
        ' * @time <%=  name %>',
        ' */',
        ''
    ].join('\n');
    return  gulp.src(build + '/static/css/main.css')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(header(banner, {
            pkg: pkg,
            name: day
        }))
        .pipe(nano())
        .pipe(rename('main.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./static/css/'))
        .pipe(browserSync.reload({stream: true}));

})




gulp.task('build:style', function(cb) {
    runSequence('build:style:less','build:style:min', cb);
});

gulp.task('release', ['build:style']);


gulp.task('watch', ['release'], function () {
    gulp.watch('static/less/*.less', ['build:style']);
    gulp.watch('templates/**/*.html', ['build:style']);
});

gulp.task('server', function () {
    yargs.p = yargs.p || 3000;
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: yargs.p,
        startPath: '/templates'
    });

});

gulp.task('default', ['release'], function () {
    if (yargs.s) {
        gulp.start('server');
    }

    if (yargs.w) {
        gulp.start('watch');
    }
});
