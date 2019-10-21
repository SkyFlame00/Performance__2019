// const imagemin = require('imagemin');
// const imageminWebp = require('imagemin-webp');

// imagemin(['img/*.{jpg,jpeg,png}'], 'webp', {
//   use: [
//       imageminWebp({quality: 50})
//   ]
// }).then(() => {
//   console.log('Images optimized');
// });

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['img/*.{jpg,png}'], {
  destination: __dirname + '/webp',
  plugins: [
    imageminWebp({
      quality: 75,
      resize: {
        width: 1000,
        height: 0
      }
    })
  ]
}).then(() => {
  console.log('Images optimized');
});