import React, { Component } from "react";
import Form from "./component/form";
import Weather from "./component/weather";
import "./App.css"
class App extends Component {
  state={
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    descrabtion:'',
    error:'',
  }

  get_weather= async (e)=>{
    e.preventDefault();
    const cuntry=e.target.elements.cuntry.value;
    const city =e.target.elements.city.value;
    const api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${cuntry}&appid=e36ed364400282e43250b6c4c0274d44`);
    const data=await api.json();
    
    if(cuntry&&city){
      this.setState({
        tempreature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        descrabtion:data.weather[0].description,
      })
    }else{
      this.setState({
        tempreature:'',
        city:'',
        country:'',
        humidity:'',
        descrabtion:'',
        error:'you must enter data',
    
      })
    }
    
  }
  

  
  render(){
    return (
      <div className="contener">
        <div className="main">
          <Form get_weather={this.get_weather}/>
          <Weather data={this.state}/>
          
        </div>
      </div>
    );
  }
}

export default App;
