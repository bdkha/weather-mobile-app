function loadColor(text) {
  switch (text) {
    case '01n':
      return 'rgba(55,59,81,0.6)';
      break;
    case '02d':
      return 'rgba(29,108,165,0.6)';
      break;
    case '02n':
      return 'rgba(2,33,73,0.6)';
      break;
    case '03d':
      return 'rgba(29,108,165,0.6)';
      break;
    case '03n':
      return 'rgba(2,33,73,0.6)';
      break;
    case '04d':
      return 'rgba(130,130,138,0.6)';
      break;
    case '04n':
      return 'rgba(92,109,125,0.9)';
      break;
    case '09d':
      return 'rgba(151,143,114,0.6)';
      break;
    case '10d':
      return 'rgba(151,143,114,0.6)';
      break;
    case '50d':
      return 'rgba(37, 150, 190,0.6)';
      break;
    default:
      break;
  }
}

export default loadColor;
