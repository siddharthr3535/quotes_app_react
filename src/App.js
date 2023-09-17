import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = {advice:''}
  componentDidMount() {
    this.fetchAdvice()
  }
  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      const {advice} = response.data.slip;
      this.setState({advice});
    }).catch((error) => {
      console.log(error)
    })
  }
  render() {
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{this.state.advice}</h1>
          <button className='button' onClick={this.fetchAdvice}>
            <span>Advice please</span>
          </button>
        </div>
      </div>);
    
  }
}
export default App;
