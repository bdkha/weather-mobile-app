function loadImage(text) {
  switch (text) {
    case '01n':
      return require('./01n.jpg');
      break;
    case '02d':
      return require('./02d.jpg');
      break;
    case '02n':
      return require('./02n.jpg');
      break;
    case '03d':
      return require('./03d.jpg');
      break;
    case '03n':
      return require('./03n.jpg');
      break;
    case '04d':
      return require('./04d.jpg');
      break;
    case '04n':
      return require('./04n.jpg');
      break;
    case '09d':
      return require('./09d.jpg');
      break;
    case '10d':
      return require('./10d.jpg');
      break;
    case '50d':
      return require('./50d.jpg');
      break;
    default:
      break;
  }
}

export default loadImage;
