import React, { useEffect } from 'react'
import CitySelect from '../components/CitySelect'

const TurkeyList = () => {
  useEffect(() => {
    document.title="Weather App | Turkey City List"
  }, [])
  return (
    <div>
        <CitySelect />
    </div>
  )
}

export default TurkeyList