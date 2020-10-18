import React from 'react';
import './side-bar.css';
import phone from '../../img/smartphone.png';
import bill from '../../img/bill.png';
import transfer from '../../img/money-transfer.png';
import card from '../../img/credit-card.png';


export const Sidebar = ()=>  {
    
  return  (
   
    <div className="side__bar">
    <ul className="side__bar-menu">
   
        <li className="item1 airtime">
        <div className="logo">
        <img src={phone} className="sidebar__image"/>
        </div>
        <p className="item_list">Buy Airtime</p>
        </li>
        <li className="item1">
        <div className="logo">
        <img src={bill} className="sidebar__image"/>
        </div>
        <p className="item_list">Pay Bills</p> 
        </li>
        <li className="item1">
        <div className="logo">
        <img src={transfer} className="sidebar__image"/>
        </div>
        <p className="item_list">Transfers</p>
        </li>
        <li className="item1">
        <div className="logo">
        <img src={card} className="sidebar__image"/>
        </div>
        <p className="item_list"> More</p>
        </li>
       
    </ul>
    </div>
    
)
  }

