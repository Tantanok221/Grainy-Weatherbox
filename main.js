import './sass/main.sass'
import FetchWrapper from './lib/fetchWrapper'
import {fromUnixTime,format} from 'date-fns'
import {DOM} from "./lib/DOM"
import UpdateWeather from './lib/updateWeather'

const API = new FetchWrapper(`https://api.openweathermap.org/data/2.5/weather?id=1733046&appid=`) 




try {
    // var data = await API.get(key.KEY)   
}catch(error)
{
    console.error(error)
}


const icon = data.weather[0].id
const temperature = (data.main.temp - 273.15).toFixed(1) 
const humidity = data.main.humidity
const pressure = data.main.pressure
const speed = data.wind.speed
const time = format(fromUnixTime(data.dt),"dd MMM yyyy, h:m a")

DOM.temperature.textContent = String(temperature + " °C")
DOM.time.textContent = time
DOM.speed.textContent = speed
DOM.pressure.textContent = String(pressure + " hPa") 
DOM.humidity.textContent = String(humidity+"%")
UpdateWeather(icon,DOM.icon)
