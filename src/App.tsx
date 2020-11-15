import React from 'react';
import Container from './components/container/Container'
import LocationProvider from './context/locationContext/LocationProvider'
import WeatherDataGrid from './components/WeatherData/WeatherDataGrid';
import AddCity from './components/AddCity/AddCity';
function App() {
  return (
      <LocationProvider>
        <Container fluid addClasses='primary'>
          <div style={{ textAlign: 'center', marginBottom: 12, padding: '1rem'}}>
            <h2>Weather App</h2>
          </div>
          <AddCity />
          <WeatherDataGrid />
      </Container>
      </LocationProvider>
  );
}

export default App;
