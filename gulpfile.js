'use strict';
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const express = require('express');
const gulp = require('gulp');
const del = require('del');
const wpConfig = require('./webpack.config.js');
const demoConfig = require('./webpack.config.demo.js');
const execSync = require('child_process').execSync;
const path = require('path');

gulp.task('clean', [], cb => {
  del(['dist']).then(() => cb());
});

gulp.task('checkVersion', cb => {
  const cwd = process.cwd();
  const version = process.env.npm_package_version;

  let exitCode = 0;
  try {
    execSync(`git ls-remote --exit-code --tags origin ${version}`, {
      cwd,
    });
  } catch (e) {
    exitCode = e.status;
  } finally {
    if (exitCode === 0) {
      cb('当前工程版本号已经被打成tag');
    } else if (exitCode !== 2) {
      cb('获取远程仓库tag失败, 或者还未建立远端对应git仓库');
    } else {
      cb();
    }
  }
});

gulp.task('build', ['clean'],() => {
  wpConfig.devtool = 'source-map';
  return gulp.src('./src/**/*.js')
    .pipe(gulpWebpack(wpConfig, webpack))
    .pipe(gulp.dest('dist'));
});

gulp.task('demo', () => {
  demoConfig.devtool = 'source-map';
  return gulp.src('./docs/**/*.js')
    .pipe(gulpWebpack(demoConfig, webpack))
    .pipe(gulp.dest('docs'));
});

gulp.task('dev', cb => {
  const app = express();
  demoConfig.devtool = 'eval';
  Object.keys(demoConfig.entry).forEach(k => demoConfig.entry[k].unshift(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?http://localhost:80',
    'webpack/hot/only-dev-server'
  ));
  demoConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  );
  const compiler = webpack(demoConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: demoConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(express.static(__dirname));
  app.get('/docs/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs', 'index.html'));
  });
  app.listen(80, err => {
    if (err) return console.log(err);
    console.log('Page is running at: http://localhost/docs/index.html');
    cb();
  });
});


gulp.task('default', ['build']);
