import './main.sass'
import FetchWrapper from './lib/fetchWrapper'
import {fromUnixTime,format} from 'date-fns'

const API = new FetchWrapper(`https://api.openweathermap.org/data/2.5/weather?id=1733046&appid=`) 
const DOM = {
    temperature: document.querySelector(".temperature"),
    time: document.querySelector(".time"),
    speed: document.querySelector(".speed"),
    pressure: document.querySelector(".pressure"),
    humidity: document.querySelector(".humidity"),
    icon: document.querySelector(".weather")

}
try {
    // var data = await API.get(key.KEY)   
}catch(error)
{
    console.error(error)
}
console.log(data)
const icon = data.weather[0].main
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
