window.addEventListener('load', () => {
  const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    const src = images[i].getAttribute('data-src')

    if (src) {
      images[i].setAttribute('src', src);
    }
  }
});