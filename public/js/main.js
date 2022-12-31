const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer')

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = "Please write the name before search";
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=97548988a205ce2ff54b42884ab44833`;
            const response =  await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            // console.log(arrData);
            const tempMood  = arrData[0].weather[0].main;
            console.log(tempMood);
            // condition to check sunny and cloudy
            if(tempMood == "clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }
            else if(tempMood == "clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }
            else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#f1f2f6;'></i>"
            }


            datahide.classList.remove('data_hide');
                }
        catch{
            city_name.innerText = "Please enter the city name properly";
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click',getInfo);