import WeatherCard from '../Cards/WeatherCard/WeatherCard';
import style from './WeatherContainer.module.css';


const WeatherContainer = () => {
    return (
        <div className={style.container}>
            <WeatherCard/>
        </div>
    )
}

export default WeatherContainer
