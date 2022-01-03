import WeatherCard from '../Cards/WeatherCard/WeatherCard';
import style from './WeatherContainer.module.css';
import {useEffect, useState} from "react";
import SearchBar from "../Cards/SearchBar/SearchBar";


const WeatherContainer = () => {

    const [cities, setCities] = useState([]);
    const [currentCity, setCurrentCity] = useState('');

    useEffect(() => {
        setCities([])
    }, [])

    return (
        <div className={style.container}>
            <SearchBar
                value={currentCity}
                onChange={setCurrentCity}
                onClick={()=>{
                    setCities([...cities, currentCity]);
                    setCurrentCity('');
                }}
            />
            <div className={style.cardsContainer}>
                {
                    cities.map(city => <WeatherCard cityName={city} key={city}/>)
                }
            </div>

        </div>
    )
}

export default WeatherContainer
