import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default function drawGraph(x,y){
    const config = {
        type: "line",
        data: {
            labels: x,
            datasets: [{
                yAxisID: 'yAxis',
                data: y,
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
    return new Chart(document.getElementById("chart"),config)
    
}