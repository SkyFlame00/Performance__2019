const tinify = require('tinify');
const fs = require('fs');

tinify.key = "2TKhNRBz0lWB9T1Lc2DY1G09TNlXqJ9B";

const sourceDir = './img-source';
const distDir = './img-dist';
const images = [
  'cam2.jpg',
  // 'waves-bg.png',
  // 'm1000x1000.jpeg',
  // 'yd2.png'
];

const init = () => {
  return Promise.all(images.map(img => {
    const source = tinify.fromFile(`${sourceDir}/${img}`);
    return fs.promises.mkdir(`${distDir}/1`)
      .then(() => source.toFile(`${distDir}/1/${img}`));
  }));
}

const compressSequentially = compressionsNum => {
  let promise = Promise.resolve();

  for (let i = 0; i < compressionsNum; i++) {
    promise = promise.then(() => {
      return Promise.all(images.map(img => {
        const source = tinify.fromFile(`${distDir}/${i + 1}/${img}`);
        return fs.promises.mkdir(`${distDir}/${i + 2}`)
          .then(() => source.toFile(`${distDir}/${i + 2}/${img}`));
      }));
    });
  }

  return promise;
}

init()
  .then(() => compressSequentially(2))
  .then(() => console.log('done'))
  .catch(e => console.log(e))