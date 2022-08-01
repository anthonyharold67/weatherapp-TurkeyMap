import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import About from "../pages/About"
import Home from "../pages/Home"
import TurkeyList from "../pages/TurkeyList"
import TurkeyMap from "../pages/TurkeyMap"
import WeatherInfo from "../pages/WeatherInfo"

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/turkey-list" element={<TurkeyList />} />
            <Route path="/turkey-map" element={<TurkeyMap />} />
            <Route path="/weather/:city" element={<WeatherInfo />} />
        </Routes>
    </Router>    
  )
}

export default AppRouter