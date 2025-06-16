export const formatTemperature = (temp: number, units: string): string => {
  const roundedTemp = Math.round(temp);
  return units === 'metric' ? `${roundedTemp}°C` : `${roundedTemp}°F`;
};

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};