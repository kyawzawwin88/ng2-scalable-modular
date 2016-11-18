gulp = require 'gulp'
# webserver = require 'gulp-webserver'
connect = require 'gulp-connect'
gulpPug = require 'gulp-pug'
pug = require 'pug'
del = require 'del'
ts = require 'gulp-typescript'
tsProject = ts.createProject 'tsconfig.json', { typescript: require('typescript') }
mkdirp = require 'mkdirp'
scss = require 'gulp-sass'
path = require 'path'
gnf = require 'gulp-npm-files'
browserSync = require('browser-sync').create()
symlink = require 'gulp-sym'

config =
  dest: './release/'
  host: 'release'
  vendorsDest: './release/vendors'
  fontsDest: './release/fonts'
    
gulp.task 'webserver', ->
  connect.server({
    root: config.host,
    port: 3000,
    host: 'localhost',
    fallback: config.host + '/index.html',
    livereload: true
  })

gulp.task 'scss', ->
  gulp.src(['**/*.scss', '!./node_modules/**'])
  .pipe(scss())
  .pipe gulp.dest(config.dest)
  .pipe(browserSync.reload({ stream: true }))

gulp.task 'pug', ->
  gulp.src(['**/*.pug', '!./node_modules/**']).pipe(gulpPug(
    pug: pug
    pretty: true))
  .pipe gulp.dest(config.dest)
  .pipe(browserSync.reload({ stream: true }))

gulp.task 'ts', ->
  tsProject.src()
    .pipe(ts(tsProject))
    .pipe gulp.dest(config.dest)
    .pipe(browserSync.reload({ stream: true }))

gulp.task 'clean', ->
  del [
    config.dest
  ]

gulp.task 'init', ['clean'], ->
  # mkdirp config.vendorsDest
  mkdirp config.dest, () ->
    gulp.src(['node_modules'])
      .pipe(symlink(config.dest + '/node_modules'))
  
gulp.task 'copy', ['init'], ->
  
gulp.task 'browser-sync', ['ts', 'pug', 'scss'], ->
  browserSync.init {
    server: {
      baseDir: "./release"
    },
    online: true
  }

  gulp.watch ['./assets/**/*.ts', '*-module/**/*.ts'], ['ts']
  gulp.watch ['index.pug', '*-module/**/*.pug'], ['pug']
  gulp.watch ['assets/**/*.scss', '*-module/**/*.scss'], ['scss']

gulp.task 'default', [ 'copy' ], ->
  gulp.start 'browser-sync'