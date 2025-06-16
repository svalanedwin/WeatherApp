import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useTheme = () => {
  const darkMode = useSelector((state: RootState) => state.appSettings.darkMode);
  
  const toggleTheme = () => {
    // This would dispatch the toggle action
    // Implementation depends on your Redux setup
  };

  return { darkMode, toggleTheme };
};