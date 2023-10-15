import './sass/main.sass'
import FetchWrapper from './lib/helper/fetchWrapper'
import {fromUnixTime,format} from 'date-fns'
import init from "./lib/init"
import Chart from 'chart.js/auto'
import DateFilter from "./lib/helper/DateFilter"

const chart = document.getElementById("myChart")

const FORECASTAPI = new FetchWrapper(`https://api.openweathermap.org/data/2.5/forecast?id=1733046&appid=`)
const extract = []
const ALLDATA = await FORECASTAPI.get(key.KEY)
ALLDATA.list.forEach(DATA => {
    let Nextract = {
        icon: DATA.weather[0].id,
        temperature: (DATA.main.temp - 273.15).toFixed(1), 
        humidity: DATA.main.humidity,
        pressure: DATA.main.pressure,
        speed: DATA.wind.speed,
        time: format(fromUnixTime(DATA.dt),"dd MMM yyyy, h:m a")
    }
    extract.push(Nextract)
})
const futureForecast = {
    time: DateFilter(extract,1,8).map(data =>  data.time),
    temperature: DateFilter(extract,1,8).map(data =>  data.temperature)
}  
console.log(futureForecast)
// init()
new Chart(
    chart,
    {
        type: "line",

    }
)


const FiveDayIcon = DateFilter(extract,8,5).map(data =>  data.icon) // Filter future five date(include today) data based on the user time
