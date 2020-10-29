import React, {Component} from 'react';
import './buyairtime.box.css';
import {SelectComponent} from './select.search';
import Select from 'react-select'




  export class AirtimeBox extends Component {
   constructor () {
    super()

    

   }


    SwitchAirtime = ()=> {
        
        return (
           <div>

           </div>
           
        )
       
      
       
        
    }
   render() {

       

    return (
        
        <div className="airtime__box" >
            <h3>Buy Airtime</h3>
            <div className="airtime__box__brands">
                <div className="airtime__box__mtn" onClick={this.SwitchAirtime}>
                    <div className="airtime__box__mtn__logo">
                        Logo
                    </div>
                    <div className="airtime__box__mtn__text">
                        MTN
                    </div>
                </div> 
                <div className="airtime__box__glo">
                    <div className="airtime__box__glo__logo">
                        Logo
                    </div>
                    <div className="airtime__box__glo__text">
                        GLO
                    </div>
                </div>
            </div>
            <div className="airtime__box__brands">
                <div className="airtime__box__airtel">
                    <div className="airtime__box__airtel__logo">
                       <p>Logo</p> 
                    </div>
                    <div className="airtime__box__airtel__text">
                       <p>AIRTEL</p> 
                    </div>
                </div>
                <div className="airtime__box__etisalat">
                    <div className="airtime__box__etisalat__logo">
                        Logo
                    </div>
                    <div className="airtime__box__etisalat__text">
                        ETISALAT
                    </div>
                </div>
            </div>
           
        </div>
    )

   }
    
    
}


