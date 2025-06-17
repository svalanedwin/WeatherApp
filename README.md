# Weather App - React Native

A cross-platform weather application built with React Native that fetches and displays weather data from OpenWeatherMap API.


Demo Videos
* Android Demo Video -  https://drive.google.com/file/d/1i75t1gNWSt6d264d7gx5VG0ATdPXxu9-/view?usp=sharing
* iOS Demo Video - https://drive.google.com/file/d/1sT4k2o6qBePwNT7xlJWsMt8xmJH0J2Kf/view?usp=sharing
  
---|---

## Features

- Search weather by city name
- Display current weather conditions (temperature, description, icon)
- Persistent last searched city
- Dark/Light mode toggle (Bonus)
- Error handling for invalid cities
- Loading states
- Cross-platform (iOS & Android)

## Technical Stack

- React Native
- TypeScript
- Redux Toolkit (State Management)
- React Navigation
- Axios (API calls)
- MSW (Mock Service Worker for testing)
- Jest & React Testing Library (Unit Testing)

## Project Structure

src/
├── assets/ # Static assets
├── components/ # Reusable components
├── config/ # App configuration
├── context/ # Context providers
├── hooks/ # Custom hooks
├── navigation/ # Navigation setup
├── redux/ # Redux store and slices
├── screens/ # App screens
├── services/ # API and storage services
├── utils/ # Helper functions

── App.tsx # Root component


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/svalanedwin/WeatherApp.git
   cd weather-app

2. Install dependencies:
      ```bash
     yarn install

3. Create .env file in root directory:
    ```env
     OPEN_WEATHER_API_KEY=your_api_key_here

## Running the App

Android
   ```bash
   yarn android

iOS
   ```bash
   yarn ios

## Testing

Run unit tests:

    ```bash
    yarn test

Run tests with coverage:

    ```bash
    yarn test:coverage

## Architectural Decisions
  Architectural Decisions
1. State Management:
    Used Redux Toolkit for centralized state management with:
    * Weather data state
    * App settings (dark mode preference)
    * Async storage persistence
2. API Layer:
    Abstracted API calls into a dedicated service layer with:
    * Axios for HTTP requests
    * Proper error handling
    * Type-safe responses
3. Theming:
    Implemented a theme context with:
    * Light/dark mode support
    * Consistent color palette
    * Theme-aware components
4. Testing Strategy:
    Comprehensive unit testing with:
    * Component tests - 3 cases Added
    * Redux slice tests
    * Custom hook tests
    * API service tests
    * MSW for API mocking
5. Navigation:
    Used React Navigation with:
    * Type-safe routes
    * Theme integration
    * Native stack navigation



Future Improvements
* Add 5-day forecast
* Implement location-based weather
* Add more weather details (humidity, wind speed)
* Improve animations
* Add internationalization
