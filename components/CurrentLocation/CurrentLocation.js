import {MdLocationOn} from "react-icons/md";
import { useState } from "react";
import { useEffect } from 'react';
import c from "./CurrentLocation.module.css"

const api = {
    key: `030233927d96fcf65693a547001bfb57`,
    base: "https://api.openweathermap.org/data/2.5/weather?",
  };

           
const CurrentLocation =({setCityWeatherData,setIsLoading,setApiCode})=>{
  
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  /**Getting current locations Latitude and Longitude */
  useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
    },[])

    /**Fetching Data onClick CurrentLocation Element on the weather app  */
    const getCurrentLocation=()=>{
      setIsLoading(true)
      fetch(`${api.base}lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`)
          .then((res) => res.json())
          .then((result) => {
            setIsLoading(false)
            if(result.cod===200){
              setCityWeatherData(result)
              setApiCode(200)
          }
          else{
              setApiCode(400)
          }          
          });
    }
    
    return(
        <div className={c.locationbox}>
          <MdLocationOn className={c.searchbtn} onClick={getCurrentLocation}/>
        </div>    
    )
    }

export default CurrentLocation