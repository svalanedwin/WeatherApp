import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import weatherReducer from './slices/weatherSlice';
import appSettingsReducer from './slices/appSettingsSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['appSettings'],
};

const persistedReducer = persistReducer(persistConfig, appSettingsReducer);

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    appSettings: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;