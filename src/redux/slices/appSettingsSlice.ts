import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppSettingsState {
  darkMode: boolean;
}

const initialState: AppSettingsState = {
  darkMode: false,
};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = appSettingsSlice.actions;

export default appSettingsSlice.reducer;