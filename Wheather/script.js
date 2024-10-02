
let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let location = document.getElementById("text").value


    let fetchweather = async()=>{
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1d04a1210f2b52093cd6c810b4b7fd06`)
        let finaldata = await data.json()
        //   console.log(finaldata)

        let tempValue=(Math.round(finaldata.main.temp - 273))
        let humidValue=(finaldata.main.humidity)
        let weatherDescription=(finaldata.weather[0].main).toUpperCase()
         
        let desc = document.getElementById("Rainy")
        console.log(desc);
        desc.innerHTML = weatherDescription.toUpperCase()

        let temp = document.querySelector("#temperature>h1")
        temp.innerHTML = `${tempValue}<sup>0</sup>`

        let humid=document.querySelector("#humidity>h1")
        humid.innerHTML = humidValue

        let img = document.getElementById("img");
        console.log(img);
        let bgc = document.getElementById("maincontainer");
        console.dir(bgc);
        switch (weatherDescription){
            case "CLEAR":
                img.src = "./Assests/sun.png";
                bgc.style.backgroundImage = "url(./Assets/clearWeather.gif)";
                break;
            case "CLOUDS":
                img.src = "./Assets/partly-cloudy.png";
                bgc.style.backgroundImage = "url(./Assets/cloudsWeather.gif)";
                break;
            case "MIST":
                img.src = "./Assets/windy.png";
                bgc.style.backgroundImage = "url(./Assets/mistWeather.gif)";
                break;
            case "HAZE":
                img.src = "./Assets/haze.png";
                bgc.style.backgroundImage = "url(./Assets/hazeWeather.gif)";
                break;
            case "RAIN":
                img.src = "./Assets/rainy-day.png";
                bgc.style.backgroundImage = "url(./Assets/rainWeather.gif)";
                break;
            case "SNOW":
                img.src = "./Assets/snow.png";
                bgc.style.backgroundImage = "url(./Assets/snowWeather.gif)";
                break;
            case "DUST":
                img.src = "./Assets/sandstorm.png";
                bgc.style.backgroundImage = "url(./Assets/dustWeather.gif)";
                break;
            default:
                img.src = "./Assets/sun.png";
                bgc.style.backgroundImage = "url(./Assets/sun.gif)";

        } 

    }
    fetchweather()

});