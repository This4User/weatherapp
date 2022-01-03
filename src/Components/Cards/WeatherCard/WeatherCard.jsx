import {getCurrentWeather} from "../../../utils/utils";
import {useEffect, useState} from "react";
import style from './WeatherCard.module.css'

const WeatherCard = ({ cityName, onClose }) => {
    const [currentWeather, setCurrentWeather] = useState({});
    const currentCity = cityName;
    useEffect(() => {
        getCurrentWeather(cityName)
            .then(currentWeather => setCurrentWeather(currentWeather))
    }, [])
    return (
        <div className={style.cardContainer}>
            <div
                className={style.close}
                onClick={()=>{
                    onClose(currentCity)
                }}
            >
                X
            </div>
            {
                currentWeather.temperature ?
                    <div>
                        <div className={style.title}>
                            <div className={style.temperature}>
                                {currentWeather.temperature}
                            </div>
                            <div className={style.city}>
                                {currentWeather.city}
                            </div>
                        </div>
                        <div className={style.description}>
                            {currentWeather.description}
                            <img src={currentWeather.icon} alt={currentWeather.description}/>
                        </div>
                    </div>
                    :
                    <div className={style.description}>
                        Something went wrong
                    </div>
            }
        </div>
    )
}

export default WeatherCard;