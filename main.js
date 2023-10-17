import './sass/main.sass'
import FetchWrapper from './lib/helper/fetchWrapper'
import {fromUnixTime,format} from 'date-fns'
import init from "./lib/init"
import DateFilter from "./lib/helper/DateFilter"
import getData from './lib/getData'
import formatDate from "./lib/formatDate"
import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'


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
Chart.register(ChartDataLabels)
Chart.defaults.plugins.legend.display = false
Chart.defaults.font.size = 24
Chart.defaults.font.family = "Rajdhani"
Chart.defaults.font.weight = "Regular"
Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#fff'
Chart.defaults.plugins.datalabels.color = "#fff"
Chart.defaults.plugins.datalabels.font.size = "13"
Chart.defaults.plugins.datalabels.font.family = "Rajdhani"
Chart.defaults.plugins.datalabels.backgroundColor = "#000"
Chart.defaults.plugins.datalabels.align = "end"
Chart.defaults.plugins.datalabels.formatter = function(value,context) {
    return value + " °C"
}
Chart.defaults.plugins.datalabels.borderRadius = 8
Chart.defaults.plugins.datalabels.padding.left = 6
Chart.defaults.plugins.datalabels.padding.right = 6
const mychart = new Chart(document.getElementById("chart"),config)
window.addEventListener('beforeprint', () => {
    mychart.resize(600, 600);
  });
  window.addEventListener('afterprint', () => {
    mychart.resize();
  });


// const ChartData = mapData(futureForecast.time,futureForecast.temperature,8)

// init()



const FiveDayIcon = DateFilter(DATA,8,5).map(data =>  data.icon) // Filter future five date(include today) data based on the user time


