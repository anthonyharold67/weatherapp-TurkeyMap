import React from 'react'
import useTurkeyCities from "use-turkey-cities";

const CitySelect = ({setHeader}) => {
    const { cities, city, setCity} = useTurkeyCities();
 
    return (
      <div className="App">
        <form
          onSubmit={e => {
            e.preventDefault();
            setHeader(city);
          }}
        >
          <select
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default CitySelect