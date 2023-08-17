
async function dailyForecast(WeatherForecase){
    try{
        const response = await fetch(WeatherForecase);
        if (!response.ok){
            throw new Error("Cannot access data in this location");
        }
        let data = await response.json();
        console.log(data);
        displayForecast(data);
    } 
    catch (error){
        console.log(error);
    }   
}

function displayForecast(data) {

    let currentData = new DataTransfer();
    let currentDay = currentData.getDay();
    let currentWeekDay = daysOfTheWeek[currentDay];

    for(const[key,value] of Object.entries(data.list)){
        let day = value.dt;
    }
}