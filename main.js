import './sass/main.sass'
import FetchWrapper from './lib/fetchWrapper'
import {fromUnixTime,format} from 'date-fns'
import init from "./lib/init"
import Chart from 'chart.js/auto'
import DayFilter from "./lib/DayFilter"


const FORECASTAPI = new FetchWrapper(`https://api.openweathermap.org/data/2.5/forecast?id=1733046&appid=`)
const chart = document.getElementById("myChart")
const extract = []
// const ALLDATA = await FORECASTAPI.get(key.KEY)
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

const FiveDay = DayFilter(extract)
console.log(FiveDay)

// init()
new Chart(
    chart,
    {
        type: "line",

    }
)


