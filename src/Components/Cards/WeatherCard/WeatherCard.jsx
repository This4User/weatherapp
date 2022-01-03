import {getCurrentWeather} from "../../../utils/utils";
import {useEffect, useState} from "react";
import style from './WeatherCard.module.css'

const WeatherCard = ({ cityName }) => {
    const [currentWeather, setCurrentWeather] = useState({});

    useEffect(() => {
        getCurrentWeather(cityName)
            .then(currentWeather => setCurrentWeather(currentWeather))
    }, [])
    return (
        <div className={style.cardContainer}>
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