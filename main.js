import './sass/main.sass'
import FetchWrapper from './lib/fetchWrapper'
import init from "./lib/init"

const FORECASTAPI = new FetchWrapper(`https://api.openweathermap.org/data/2.5/forecast?id=1733046&appid=`)
const chart = document.getElementById("myChart")


// init()



