import d from "./DisplayWeather.module.css"

const DisplayWeather = ({ data,apiCode }) => {
  
  return (
    <>
    { apiCode!==200 &&
      <div className={d.weather}>
        <h4 className={d.temperature}>Not Found</h4>
        <p>Give A Valid City Name</p>
        <img className={d.not_found} src="https://cdni.iconscout.com/illustration/premium/thumb/no-address-found-4344458-3613886.png"/>   
        <p>Developed By Vamsi Bhushan</p>
      </div>
    }
    
    {
      apiCode === 200  && <div className={d.weather}>
      <div className={d.top}>
        <div>
          <p className={d.city}>{data.name}</p>
          <p className={d.weather_description}>{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className={d.weather_icon}
          src={`https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`}
        />
      </div>
      <div className={d.bottom}>
        <p className={d.temperature}>{Math.round(data.main.temp)}°C</p>
        
      </div>
      
      <div className={d.details}>
      <div>
      <div className={d.parameter_row}>
          <span className={d.parameter_label}>Feels like</span>
          <span className={d.parameter_value}>
            {Math.round(data.main.feels_like)}°C
          </span>
        </div>
        <div className={d.parameter_row}>
          <span className={d.parameter_label}>Wind</span>
          <span className={d.parameter_value}>{data.wind.speed} m/s</span>
        </div>
        <div className={d.parameter_row}>
          <span className={d.parameter_label}>Humidity</span>
          <span className={d.parameter_value}>{data.main.humidity}%</span>
        </div>
        <div className={d.parameter_row}>
          <span className={d.parameter_label}>Pressure</span>
          <span className={d.parameter_value}>{data.main.pressure} hPa</span>
        </div>

      </div>

      </div>
      <p className={d.my_name}>Developed by Vamsi Bhushan</p>
  </div> 
  
  }
      
    </>
    
    
  );
};

export default DisplayWeather;