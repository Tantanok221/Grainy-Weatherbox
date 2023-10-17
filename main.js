import './sass/main.sass'
import FetchWrapper from './lib/helper/fetchWrapper'
import {fromUnixTime,format} from 'date-fns'
import init from "./lib/init"
import DateFilter from "./lib/helper/DateFilter"
import getData from './lib/getData'
import formatDate from "./lib/formatDate"
import Chart from 'chart.js/auto'


function mapData(arrayx,arrayy,step){
    let newarray = {}
    for(let i = 0; i < step ;i++){
        newarray[i] = {date: arrayx[i], values: arrayy[i]}
    }
    return newarray
}

const DATA = await getData()
const futureForecast = {
    time: DateFilter(DATA,1,8).map(data =>  formatDate(data.time).substring(13)), // X Axis
    temperature: DateFilter(DATA,1,8).map(data =>  data.temperature) //Data Point
}  
console.log(futureForecast.time)
const config = {
    type: "line",
    data: {
        labels: futureForecast.time,
        datasets: [{
            yAxisID: 'yAxis',
            data: futureForecast.temperature,
            borderColor: "#FED568"
    }],
    options: {
        scales: {
            yAxis: {
                display: false
            },
            xAxis: {

            }
        },
        tooltip: {
            enabled: false
        },
        
    },
    
        
    }
}
Chart.defaults.plugins.legend.display = false
Chart.defaults.font.size = 24
Chart.defaults.font.family = "Rajdhani"
Chart.defaults.font.weight = "Regular"
Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#fff'
new Chart(document.getElementById("chart"),config)

// const ChartData = mapData(futureForecast.time,futureForecast.temperature,8)

// init()



const FiveDayIcon = DateFilter(DATA,8,5).map(data =>  data.icon) // Filter future five date(include today) data based on the user time


