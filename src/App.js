import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import FormContainer from './components/FormContainer.js';
import Main from './components/Main.js';
// import getWeatherData from './utils/getWeatherData.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp: '5',
      high: '3',
      low: '4',
      humidity: '33',
      wind: '22',
      location: 'London'
    }
    this.updateLocation = this.updateLocation.bind(this);
    this.processData = this.processData.bind(this);
  }

  async getWeatherData(city, unit) {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`, { mode: 'cors' });
    console.log(response);
    return await response.json();
  }

  processData(json) {
    this.setState({
      temp: json.main.temp,
      low: json.main.temp_min,
      high: json.main.temp_max,
      humidity: json.main.humidity,
      wind: json.wind.speed
    })
  }
   
  updateLocation(formData) {
    this.setState({location: formData.location}, function() {
      console.log(this.state.location);
      this.getWeatherData(this.state.location, 'imperial')
      .then((data) => this.processData(data));
    })
  }
  

  render() {
    return (
      <div className="App">
        <Header />
        <FormContainer updateLocation={this.updateLocation} />
        <Main data={this.state} />
      </div>
    )
  }
}



export default App;

