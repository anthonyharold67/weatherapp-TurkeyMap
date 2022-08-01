import './App.css';
import WeatherContextProvider from './context/WeatherContext';
import AppRouter from './router/AppRouter';

function App() {
  
  return (
    <div className='w-100' style={{backgroundColor:"#025259",height:"100vh"}}>
      <WeatherContextProvider>
      <AppRouter/>
    </WeatherContextProvider>
    </div>
  );
}

export default App;
