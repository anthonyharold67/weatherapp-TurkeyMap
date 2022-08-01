import { createContext, useEffect, useState } from "react";


export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    

    const getWeather = async (city) => {
        const apiKey="4d8fb5b93d4af21d66a2948710284366"
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
