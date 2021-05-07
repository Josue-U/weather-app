import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";


export const fetchWeather = async (query) =>{
    

    try{

        const {data} =await axios.get(URL, {
            params:{
                q: query,
                units: 'metric',
                APPID: process.env.REACT_APP_API_KEY,
            }
        });
    
        return data;

    }catch(error){
        alert('City not found... ⚆ᗝ⚆  Refresh the app ^_^;  ＿|￣|○ ');
    }

   

}