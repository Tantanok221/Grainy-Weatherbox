import './sass/main.sass'
import FetchWrapper from './lib/helper/fetchWrapper'
import {format} from 'date-fns'
import init from "./lib/init"
import DateFilter from "./lib/helper/DateFilter"
import getData from './lib/getData'
import formatDate from "./lib/helper/formatDate"
import drawGraph from './lib/drawGraph'
import UpdateWeather from './lib/helper/updateWeather'



const DATA = await getData()
const futureForecast = {
    time: DateFilter(DATA,1,8).map(data =>  formatDate(data.time).substring(13)), // X Axis
    temperature: DateFilter(DATA,1,8).map(data =>  data.temperature) //Data Point
}  
drawGraph(futureForecast.time,futureForecast.temperature)



// init()
const FiveDay = {
    icon: DateFilter(DATA,8,5).map(data =>  data.icon), 
    date: DateFilter(DATA,8,5).map(data =>  format(data.time,"dd MMM")),
    DOW: DateFilter(DATA,8,5).map(data =>  format(data.time,"EEE").toUpperCase())
}  // Filter future five date(include today) data based on the user time
const DOMFiveDay ={
    icon: document.querySelectorAll(".icon"),
    date: document.querySelectorAll(".text"),
    DOW: document.querySelectorAll(".b") // Select all Day of Week Indicator
} 
for(let i = 0;i < DOMFiveDay.icon.length; i++){
    UpdateWeather(FiveDay.icon[i],DOMFiveDay.icon[i])
    DOMFiveDay.date[i].textContent = FiveDay.date[i]
    if(i != 0) DOMFiveDay.DOW[i].textContent = FiveDay.DOW[i] 
}



