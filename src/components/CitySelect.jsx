import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import useTurkeyCities from "use-turkey-cities";
import { WeatherContext } from '../context/WeatherContext';

const CitySelect = () => {
  const navigate = useNavigate();
    const { cities, city, setCity} = useTurkeyCities();
    const {getWeather} = useContext(WeatherContext)
 
    return (
      <div className="city-list">
        <form
          onSubmit={e => {
            e.preventDefault();
            getWeather(city);
            navigate(`/weather/${city.toLowerCase()}`)
          }}
        >
          <select
          className="form-select w-50"
            onChange={e => {
              setCity(e.target.value);
            }}
            value={city}
          >
            {cities.map(city => (
              <option key={`city-${city}`} value={city}>
                {city}
              </option>
            ))}
          </select>
          <br />
          <button className='btn btn-dark' type="submit">Search</button>
        </form>
      </div>
    );
}

export default CitySelect