/*const [cityWeatherData,setCityWeatherData]=useState([])
  const [city, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [input, setInput] = useState("");
  
**/

/*<CurrentLocation setCityName={setCityName} setCityWeatherData={setCityWeatherData}/>**/
import { useState } from "react"
import Search from "../Search/Search"
import CurrentLocation from "../CurrentLocation/CurrentLocation"
import Spinner from "../Spinner/Spinner" 
import w from "./WeatherApp.module.css"
import DisplayWeather from "../DisplayWeather/DisplayWeather"

const WeatherApp=()=>{
    const [cityName,setCityName]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    const [cityWeatherData,setCityWeatherData]=useState([])
    const [apiCode,setApiCode]=useState("")

    return(
        <div className={w.app}>
            
            <div className={w.search_bar}>
                <Search setApiCode={setApiCode} cityName={cityName}  setCityName={setCityName} setCityWeatherData={setCityWeatherData} isLoading={isLoading} setIsLoading={setIsLoading}/>
                <CurrentLocation setApiCode={setApiCode}    setCityWeatherData={setCityWeatherData} isLoading={isLoading} setIsLoading={setIsLoading}/>
            </div>
            <div className={w.details}>
                {isLoading && <Spinner />}
                {apiCode!=="" && !isLoading &&<DisplayWeather apiCode={apiCode} data={cityWeatherData}/>}

            </div>

        </div>
        
    )
}

export default WeatherApp