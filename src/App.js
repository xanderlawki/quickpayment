import React, { Component } from 'react';
import './App.css';
import {Header} from './components/header/header';
import {Switch, Route} from 'react-router-dom';
import { BuyAirtime } from './components/buyairtime/buyairtime';
import { Paybills } from './components/paybills/pay.bils';

class App extends Component {
  constructor() {
    super()
    
  }

async componentDidMount() {
let data =  await fetch("http://test.payarena.com:8081/all")
let results = await data.json();
this.state = results;
console.log(this.state)
   
  }
  render() {
    return (
      <div className="App">
        <Switch>
         <Route exact path="/" component={Header }/>
         <Route exact path="/buyairtime" component={BuyAirtime}/>
         <Route exact path="/paybills" component={Paybills}/>
        </Switch> 
      </div>
    );
  }
 
}

export default App;
