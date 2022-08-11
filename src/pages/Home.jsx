import React, { useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { WeatherContext } from '../context/WeatherContext'

const Home = () => {
  const navigate = useNavigate()
  const {weather} = useContext(WeatherContext)
  useEffect(() => {
    document.title="Weather App - Home"
  }, [])
  // console.log(weather.wind);
  if(!weather.wind){
    return (
      <h1>Hoşgeldiniz</h1>
    )
  }
  return (
    <div className='home'>
      <div className='header'>
      <h1 className='text-center'>Hoşgeldiniz</h1>
      <p className='text-center'>Diğer illerin hava durumu için lütfen tıklayınız.</p>
      <button className='btn btn-dark' onClick={()=>navigate("/turkey-map")}>
        Türkiye Haritası
      </button>
      <button className='btn btn-dark' onClick={()=>navigate("/turkey-list")}>Türkiye İller Listesi
      </button>
      </div>

      <div className="card" style={{borderRadius: "35px",width:"50%",height:"50%",marginRight:"5px",backgroundColor:"rgb(180 83 9)"}}>
    <div className="card-body">

      <div className="d-flex" style={{color:"#B7BF99"}}>
        <h6 className="flex-grow-1">{weather.name}</h6>
      </div>

      <div className="d-flex flex-column text-center mt-5 mb-4">
        <h6 className="display-4 mb-0 font-weight-bold" style={{color: "#1C2331"}}> {Number(weather.main.temp)}°C </h6>
        <span className="small" style={{color: "#868B94"}}>{weather.weather[0].description.toLocaleUpperCase()}</span>
      </div>

      <div className="d-flex align-items-center">
        <div className="flex-grow-1" style={{fontSize: "1rem"}}>
          <div><i className="fas fa-wind fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {weather.wind.speed} km/h
          </span></div>
        <div><i className="fas fa-tint fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {weather.main.humidity} </span>%
        </div>
        </div>
        <div>
            <img className="city-icon" style={{height:"55px"}} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.name}/>
        </div>
      </div>

    </div>
  </div>
  </div>
  )
}

export default Home