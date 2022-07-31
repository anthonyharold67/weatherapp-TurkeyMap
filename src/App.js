import './App.css';
import WeatherContextProvider from './context/WeatherContext';
import AppRouter from './router/AppRouter';

function App() {
  
  return (
    <div className='container-fluid'>
      <WeatherContextProvider>
      <AppRouter/>
    </WeatherContextProvider>
    </div>
  );
}

export default App;
