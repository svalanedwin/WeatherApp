export const getWeatherIcon = (iconCode: string) => {
  const iconMap: Record<string, any> = {
    '01d': require('../assets/icons/clear-day.png'),
    '01n': require('../assets/icons/clear-night.png'),
    '02d': require('../assets/icons/partly-cloudy-day.png'),
    '02n': require('../assets/icons/partly-cloudy-night.png'),
    '03d': require('../assets/icons/cloudy.png'),
    '03n': require('../assets/icons/cloudy.png'),
    '04d': require('../assets/icons/cloudy.png'),
    '04n': require('../assets/icons/cloudy.png'),
    '09d': require('../assets/icons/rain.png'),
    '09n': require('../assets/icons/rain.png'),
    '10d': require('../assets/icons/rain.png'),
    '10n': require('../assets/icons/rain.png'),
    '11d': require('../assets/icons/thunderstorm.png'),
    '11n': require('../assets/icons/thunderstorm.png'),
    '13d': require('../assets/icons/snow.png'),
    '13n': require('../assets/icons/snow.png'),
    '50d': require('../assets/icons/fog.png'),
    '50n': require('../assets/icons/fog.png'),
  };

  return iconMap[iconCode] || require('../assets/icons/clear-day.png');
};

export const getBackgroundColor = (weatherCode: string) => {
  const code = weatherCode.slice(0, 2);
  const isDay = weatherCode.endsWith('d');
  
  switch (code) {
    case '01': return isDay ? '#47AB2F' : '#2E86AB';
    case '02': return isDay ? '#3A7CA5' : '#1F3A4D';
    case '03': 
    case '04': return '#4A6FA5';
    case '09': 
    case '10': return '#4B7B9D';
    case '11': return '#3A3B3C';
    case '13': return '#7B9EA8';
    case '50': return '#5D5C61';
    default: return '#3498db';
  }
};