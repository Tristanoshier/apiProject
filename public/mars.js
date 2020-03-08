const url = "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];


fetch(url)
    .then(repsonse => repsonse.json())
    .then(json => displayMarsData(json)) // .then(json => displayMarsData(json))   


let displayMarsData = json => {
    console.log(json) // data

    //average temperature today on mars (celsius)
    let lastSol = json[Object.keys(json)[Object.keys(json).length - 3]];
    let tempCelsius = lastSol.AT.av;
    let highTempCelsius = lastSol.AT.mx;
    let lowTempCelsius = lastSol.AT.mn;

    //average temperature today on mars (fahrenheit)
    let avgTempFahrenheit = document.getElementById('avg-temp-fahrenheit');
    let tempFahrenheit = (tempCelsius * (9/5)) + 32;
    avgTempFahrenheit.innerText = `${Math.round(tempFahrenheit)}° F`;

    //high temperature today on mars (fahrenheit)
    let maxTempFahrenheit = document.getElementById('max-temp-fahrenheit');
    let maxTempFahrenheitConversion = (highTempCelsius * (9/5)) + 32;
    maxTempFahrenheit.innerText = `High: ${Math.round(maxTempFahrenheitConversion)}° F`;

    //low temperature today on mars (celsius)
    let minTempFahrenheit = document.getElementById('min-temp-fahrenheit');
    let minTempFahrenheitConversion = (lowTempCelsius * (9/5)) + 32;
    minTempFahrenheit.innerText = `Low: ${Math.round(minTempFahrenheitConversion)}° F`;
    
    //sol number on mars
    let sol = document.getElementById('current-sol');
    solToday = json.sol_keys[6]
    sol.innerText = `Sol ${solToday}`;

    //todays date on Earth
    let date = document.getElementById('current-date');
    let today = new Date();
    date.innerText = `${monthNames[today.getMonth()]} ${today.getDate()}`; 
}



