import { createContext, useEffect, useState } from "react";


export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    

    const getWeather = async (city) => {
        const apiKey=process.env.REACT_APP_apiKey
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`);
        const data = await response.json();
        console.log(data);
        setWeather(data);
    }
    useEffect(() => {
        getWeather('Ankara')
      }, [])
    
    return (
        <WeatherContext.Provider value={{ weather, getWeather }}>
        {children}
        </WeatherContext.Provider>
    );
}

export default WeatherContextProvider;
