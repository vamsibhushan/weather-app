import s from "./Spinner.module.css"
const Spinner=({setCityWeatherData})=>{ 
	
    return(
        <div className={s.container}>
			<div className={s.card}>
			<div className={s.hexagon} aria-label="Animated hexagonal ripples">
	<div className={s.hexagon__group}>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
	</div>
	<div className={s.hexagon__group}>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
	</div>
	<div className={s.hexagon__group}>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
	</div>
	<div className={s.hexagon__group}>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
	</div>
	<div className={s.hexagon__group}>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
	</div>
	<div className={s.hexagon__group}>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
		<div className={s.hexagon__sector}></div>
	</div>
</div>
<p aria-label="Loading">Loading</p>

			</div>
  
        </div>
    )
}

export default Spinner