import React from 'react';
import { Image, ImageStyle } from 'react-native';
import { getWeatherIcon } from '../../../utils/weatherUtils';
import { useTheme } from '../../../context/ThemeContext';

interface WeatherIconProps {
  iconCode: string;
  size?: number;
  style?: ImageStyle;
  testID?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  iconCode, 
  size = 32, 
  style, 
  testID 
}) => {
  const { theme } = useTheme();
  
  // Adjust icon tint based on theme if needed
  const tintColor = theme.dark ? theme.colors.text : undefined;

  return (
    <Image
      testID={testID}
      source={getWeatherIcon(iconCode)}
      style={[
        {
          width: size,
          height: size,
          tintColor, // Optional: Apply tint based on theme
        },
        style,
      ]}
      accessibilityIgnoresInvertColors={true}
    />
  );
};

export default React.memo(WeatherIcon);