window.addEventListener('load', () => {
  const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    const src = images[i].getAttribute('data-src')

    if (src) {
      images[i].setAttribute('src', src);
    }
  }

  const imagesCss = document.querySelectorAll('.ll-css');
  
  for (let i = 0; i < imagesCss.length; i++) {
    const src = imagesCss[i].getAttribute('data-src');

    if (src) {
      imagesCss[i].style.backgroundImage = `url(${src})`;
    }
  }
});