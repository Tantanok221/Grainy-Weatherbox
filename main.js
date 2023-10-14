import './main.sass'
import FetchWrapper from './lib/fetchWrapper'

const API = new FetchWrapper(`https://api.openweathermap.org/data/2.5/weather?id=1733046&appid=`) 

try {
    // const data = API.get(key.KEY).then(data => data)
    // console.log(data)
    

}catch(error)
{
    console.error(error)
}
