import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import './App.css';
//const API_KEY= "cb8acb832acdd97924b2cb4301956b6b";
class  App extends React.Component{
    state={
        temperature : undefined,
        city: undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:undefined
        }
    getWeather = async (e) => {
        e.preventDefault();
        const city= e.target.elements.city.value;
        const country=e.target.elements.country.value;
       
        if(city && country){
        const api_call= await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&APPID=cb8acb832acdd97924b2cb4301956b6b' ); 
        const data= await api_call.json();
        this.setState({
            temperature: data.main.temp,
            city:data.name,
            country: data.sys.country,
            humidity:data.main.humidity,
            description:data.weather[0].description,
            error:""
        });
    }
    else{
        this.setState({
            temperature: undefined,
            city:undefined,
            country: undefined,
            humidity:undefined,
            description:undefined,
            error:"Please enter the values"
        });
    }
    }
    render(){
       return (
           <div >
           <div className="box">
          <div className="left">
          <Titles />
          </div>
          <div className="right">
          <Form getWeather={this.getWeather}/>
          <Weather temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}/>
           </div>
           </div>
           </div>
       );
   }
}
export default App;