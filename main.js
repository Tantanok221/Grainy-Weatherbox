import './sass/main.sass'
import FetchWrapper from './lib/helper/fetchWrapper'
import {fromUnixTime,format} from 'date-fns'
import init from "./lib/init"
import Chart from 'chart.js/auto'
import DateFilter from "./lib/helper/DateFilter"
import getData from './lib/getData'

const chart = document.getElementById("myChart")
// const DATA = await getData()
console.log(DATA)
const futureForecast = {
    time: DateFilter(DATA,1,8).map(data =>  data.time),
    temperature: DateFilter(DATA,1,8).map(data =>  data.temperature)
}  
console.log(futureForecast)
// init(DateFilter(DATA,1,1))
new Chart(
    chart,
    {
        type: "line",

    }
)


const FiveDayIcon = DateFilter(DATA,8,5).map(data =>  data.icon) // Filter future five date(include today) data based on the user time
console.log(FiveDayIcon)