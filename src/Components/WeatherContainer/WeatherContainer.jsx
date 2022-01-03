import WeatherCard from '../Cards/WeatherCard/WeatherCard';
import style from './WeatherContainer.module.css';
import {useEffect, useState} from "react";
import SearchBar from "../Cards/SearchBar/SearchBar";


const WeatherContainer = () => {

    const [cities, setCities] = useState([]);
    const [currentCity, setCurrentCity] = useState('');

    const removeCity = (removedCity) => {
        setCities(cities.filter(city => city !== removedCity))
    }

    useEffect(() => {
        setCities(['Москва', 'Питер', 'New York'])
    }, [])

    return (
        <div className={style.container}>
            <SearchBar
                value={currentCity}
                onChange={setCurrentCity}
                onClick={() => {
                    setCities([...cities, currentCity]);
                    setCurrentCity('');
                }}
            />
            <div className={style.cardsContainer}>
                {
                    cities.map(city => <WeatherCard
                        cityName={city}
                        onClose={removeCity}
                        key={city}
                    />)
                }
            </div>

        </div>
    )
}

export default WeatherContainer
