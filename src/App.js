import React, {Component} from 'react';
import { Reset } from 'styled-reset';
import GlobalStyle from './components/GlobalStyle.js';
import ReactLoading from 'react-loading';
import Header from './components/Header.js';
import FormContainer from './components/FormContainer.js';
import Main from './components/Main.js';
import Wrapper from './components/Wrapper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp: '',
      high: '',
      low: '',
      humidity: '',
      wind: '',
      location: '',
      loaded: false,
      placeholder: 'City'
    }
    this.updateLocation = this.updateLocation.bind(this);
    this.processData = this.processData.bind(this);
    this.loadDefault = this.loadDefault.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.getWeatherData('Berlin', 'metric')
        .then(data => this.processData(data))
        .then(() => this.setState({ loaded: true }))
    }, 1200);
  }

  async getWeatherData(city, unit) {
    try {
      const key = process.env.REACT_APP_WEATHER_API_KEY;
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`, { mode: 'cors' });
      if (response.status !== 200) {
        throw new Error('not 200 response');
      } else return response.json();
    } catch(err) {
      this.setState({ placeholder: 'City not found! Try again!'})
    }
  }

  processData(json) {
    this.setState({
      temp: Math.round(json.main.temp),
      low: Math.round(json.main.temp_min),
      high: Math.round(json.main.temp_max),
      humidity: json.main.humidity,
      wind: json.wind.speed,
      location: json.name,
    })
  }
   
  loadDefault() {
    this.getWeatherData('Berlin', 'metric')
    .then(data => this.processData(data))
    .then(() => this.setState({loaded: true}))
  }

  updateLocation(formData) {
    this.setState({ loaded: false, location: formData.location }, () => {
        setTimeout(() => {
          this.getWeatherData(this.state.location, 'metric')
            .then(data => this.processData(data))
            .then(() => this.setState({ loaded: true, placeholder: 'City' }))
            .catch(() => this.loadDefault())
        }, 1200)
      }
    )
  }
  
  render() {
    return (
      <Wrapper>
        <Reset />
        <GlobalStyle />
        <Header />
        <FormContainer 
          updateLocation={this.updateLocation}
          placeholder={this.state.placeholder}
        />
        {!this.state.loaded ? 
          (<ReactLoading type={'bubbles'} color={'#143642'} />) : 
          (<Main data={this.state} />)
        }
      </Wrapper>
    )
  }
}

export default App;

