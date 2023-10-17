import './sass/main.sass'
import FetchWrapper from './lib/helper/fetchWrapper'
import {format} from 'date-fns'
import init from "./lib/init"
import DateFilter from "./lib/helper/DateFilter"
import getData from './lib/getData'
import formatDate from "./lib/helper/formatDate"
import drawGraph from './lib/drawGraph'
import UpdateWeather from './lib/helper/updateWeather'
import {DOM,DOMFiveDay} from "./lib/helper/DOM"

let chart;
// Computer Window Size
const DATA = await getData()
if(window.innerWidth >= 640) {
    const futureForecast = {
        time: DateFilter(DATA,1,8).map(data =>  formatDate(data.time).substring(13)), // X Axis
        temperature: DateFilter(DATA,1,8).map(data =>  data.temperature) //Data Point
    }  
    chart = drawGraph(futureForecast.time,futureForecast.temperature)
    
}else {
    const futureForecast = {
        time: DateFilter(DATA,1,4).map(data =>  formatDate(data.time).substring(13)), // X Axis
        temperature: DateFilter(DATA,1,4).map(data =>  data.temperature) //Data Point
    }  
    chart = drawGraph(futureForecast.time,futureForecast.temperature)
}



init()
const FiveDay = {
    icon: DateFilter(DATA,8,5).map(data =>  data.icon), 
    date: DateFilter(DATA,8,5).map(data =>  format(data.time,"dd MMM")),
    DOW: DateFilter(DATA,8,5).map(data =>  format(data.time,"EEE").toUpperCase())
}  // Filter future five date(include today) data based on the user time

for(let i = 0;i < DOMFiveDay.icon.length; i++){
    UpdateWeather(FiveDay.icon[i],DOMFiveDay.icon[i])
    DOMFiveDay.date[i].textContent = FiveDay.date[i]
    if(i != 0) DOMFiveDay.DOW[i].textContent = FiveDay.DOW[i] 
}

window.addEventListener("resize", () => {
    chart.destroy()
    if(window.innerWidth >= 640) {
        const futureForecast = {
            time: DateFilter(DATA,1,8).map(data =>  formatDate(data.time).substring(13)), // X Axis
            temperature: DateFilter(DATA,1,8).map(data =>  data.temperature) //Data Point
        }  
        chart = drawGraph(futureForecast.time,futureForecast.temperature)
        
    }else {
        const futureForecast = {
            time: DateFilter(DATA,1,4).map(data =>  formatDate(data.time).substring(13)), // X Axis
            temperature: DateFilter(DATA,1,4).map(data =>  data.temperature) //Data Point
        }  
        chart = drawGraph(futureForecast.time,futureForecast.temperature)
    }
    DOM.grainy.style.height = DOM.body.offsetHeight + "px"
    DOM.blackbg.style.height = DOM.body.offsetHeight + "px"
})
DOM.blackbg.style.height = DOM.body.offsetHeight + "px"
DOM.grainy.style.height = DOM.body.offsetHeight + "px"
