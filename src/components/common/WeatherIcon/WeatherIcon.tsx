import React from 'react';
import { Image, ImageStyle } from 'react-native';
import { getWeatherIcon } from '../../../utils/weatherUtils';

interface WeatherIconProps {
  iconCode: string;
  size?: number;
  style?: ImageStyle;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconCode, size = 32, style }) => {
  return (
    <Image
      source={getWeatherIcon(iconCode)}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  );
};

export default WeatherIcon;