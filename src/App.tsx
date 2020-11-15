import React from 'react';
import Container from './components/container/Container'
import AppBar from './components/AppBar/AppBar';
import LocationProvider from './context/locationContext/LocationProvider'
import WeatherDataGrid from './components/WeatherData/WeatherDataGrid';
import AddCity from './components/AddCity/AddCity';
function App() {
  return (
      <LocationProvider>
        <Container fluid addClasses='primary'>
        <AppBar color='primary' Logo='WeatherApp'/>
          <AddCity />
          <WeatherDataGrid />
      </Container>
      </LocationProvider>
  );
}

export default App;
