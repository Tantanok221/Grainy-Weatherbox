export default function UpdateWeather(id,DOM){
    if(String(id).charAt(0) == "2") DOM.style.backgroundImage = `url("./asset/Lightning.svg")`
    else if(String(id).charAt(0) == "5" || "3") DOM.style.backgroundImage = `url("./asset/Rainy.svg")`
    else if(id == 800 || 801) DOM.style.backgroundImage = `url("./asset/Sunny.svg")`
    else if(id == 520 || 200 || 201 || 202) DOM.style.backgroundImage = `url("./asset/Rain&Lighting.svg")`
    else if(id == 802 || 803 || 804) DOM.style.backgroundImage = `url("./asset/Cloud.svg")`
    else DOM.style.backgroundImage = `url("./asset/Cloud.svg")`
}