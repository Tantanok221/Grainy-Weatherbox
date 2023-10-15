import FetchWrapper from './helper/fetchWrapper'
import {fromUnixTime,format} from 'date-fns'

export default async function getData(){
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
    return extract
}
