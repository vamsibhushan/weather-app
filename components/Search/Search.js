import s from "./Search.module.css"
import { FaSearch } from "react-icons/fa";

const api = {
    key: `030233927d96fcf65693a547001bfb57`,
    base: "https://api.openweathermap.org/data/2.5/weather?",
  };

const Search =({cityName,setCityName,setCityWeatherData,setIsLoading,setApiCode  })=>{
    
    /**Changing city name on change in input */
    const onChangeInput  = (value) => {
        setCityName(value)
      };
    /**Fetching data with city name when Enter is pressed */
    const fetchCityData=(button)=>{
        
        if(button===13){
            setIsLoading(true)
            fetch(`${api.base}q=${cityName}&units=metric&appid=${api.key}`)
                .then(response => response.json())
                .then(response => {
                    setIsLoading(false)
                    if(response.cod===200){
                        setCityWeatherData(response)
                        setApiCode(200)
                    }
                    else{
                        setApiCode(400)
                    }
                    setCityName("")
                })
            }     
        } 
    
    return(
        <div className={s.searchbox}>
            
        <input className={s.searchinput} 
            value={cityName}  
            type="text" 
            placeholder="Search For A City" 
            onChange={(e) => onChangeInput(e.target.value)} 
            onKeyDown={(e)=>fetchCityData(e.keyCode)}
        >
        </input>
            <FaSearch className={s.searchicon}/>
        </div>
        
    )
    
}
    
export default Search