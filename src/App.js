import React, { Component } from 'react';
import './App.css';
import {Header} from './components/header/header';
import {Switch, Route} from 'react-router-dom';
import { BuyAirtime } from './components/buyairtime/buyairtime'

class App extends Component {
  constructor() {
    super()
  }

 async componentDidMount() {
let data =  await fetch("http://test.payarena.com:8081/all")
let results = await data.json();
console.log(results)



   
  }
  render() {
    return (
      <div className="App">
        <Switch>
      <Route exact path="/" component={Header }/>
      <Route exact path="/buyairtime" component={BuyAirtime}/>
      
        </Switch>
       
       
       
        
      </div>
    );
  }
 
}

export default App;
