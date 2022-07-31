import React, { useContext, useState } from 'react'
import TurkeyMap from 'turkey-map-react';
import { WeatherContext } from '../context/WeatherContext';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';


const TurkeyMaps = () => {
    const {getWeather} = useContext(WeatherContext)
    const [title,setTitle]=useState('')
    const navigate=useNavigate()

    const handleClick = (name)=>{
        console.log(name);
        getWeather(name);
        navigate(`/turkey-map/${name.toLowerCase()}`);
    }
    const renderCity = (cityComponent, cityData) => ( 
        <Tooltip title={cityData.name} key={cityData.id}> 
            {cityComponent} 
        </Tooltip>
      );

  return (
    <div style={{backgroundColor:"#010221"}}>
        <h3 className='text-center text-light' style={{marginBottom:"-2rem",marginTop:"5px"}} >{title}</h3>
        <TurkeyMap customStyle={{ idleColor: "red", hoverColor: "white" }} onClick={ ({name}) => handleClick(name)} cityWrapper={renderCity} hoverable={true}
    onHover={ ({ plateNumber, name }) => setTitle(`${plateNumber}-${name}`)} />
    </div>
  )
}

export default TurkeyMaps