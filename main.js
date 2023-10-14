import './main.sass'
import FetchWrapper from './lib/fetchWrapper'
var fromUnixTime = ('date-fns/fromUnixTime')

const API = new FetchWrapper(`https://api.openweathermap.org/data/2.5/weather?id=1733046&appid=`) 

try {
    const data = await API.get(key.KEY)
    console.log(data)
    // const icon = data.weather[0].main
    const temperature = data.main.temp + 273.15
    const humdity = data.main.humidity
    const pressure = data.main.pressure
    const speed = data.wind.speed
    const time = fromUnixTime(data.dt)
    console.log(time)
}catch(error)
{
    console.error(error)
}
