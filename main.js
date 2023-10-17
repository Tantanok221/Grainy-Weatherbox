import './sass/main.sass'
import FetchWrapper from './lib/helper/fetchWrapper'
import {fromUnixTime,format} from 'date-fns'
import init from "./lib/init"
import DateFilter from "./lib/helper/DateFilter"
import getData from './lib/getData'
import formatDate from "./lib/helper/formatDate"
import drawGraph from './lib/drawGraph'




const DATA = await getData()
const futureForecast = {
    time: DateFilter(DATA,1,8).map(data =>  formatDate(data.time).substring(13)), // X Axis
    temperature: DateFilter(DATA,1,8).map(data =>  data.temperature) //Data Point
}  
console.log(futureForecast.time)
drawGraph(futureForecast.time,futureForecast.temperature)



// init()



const FiveDayIcon = DateFilter(DATA,8,5).map(data =>  data.icon) // Filter future five date(include today) data based on the user time


