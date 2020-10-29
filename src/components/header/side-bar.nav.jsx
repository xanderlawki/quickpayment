import React from 'react';
import './side-bar.css';
import phone from '../../img/smartphone.png';
import bill from '../../img/bill.png';
import transfer from '../../img/money-transfer.png';
import card from '../../img/credit-card.png';
import { withRouter } from "react-router-dom"


export const Sidebar = ({history, match})=>  {
    
  return  (
   
    <div className="side__bar">
    <ul className="side__bar-menu">
   
        <li className="item1">
        <div className="logo">
        <img src={phone} className="sidebar__image"/>
        </div>
        <p className="item_list"   onClick={()=> history.push(`${match.url}buyairtime`)}>Buy Airtime</p>
        </li>
        <li className="item1">
        <div className="logo">
        <img src={bill} className="sidebar__image"/>
        </div>
        <p className="item_list" onClick={()=> history.push(`${match.url}paybills`)}>Pay Bills</p> 
        </li>
        <li className="item1">
        <div className="logo">
        <img src={transfer} className="sidebar__image"/>
        </div>
        <p className="item_list">Shopping Mall</p>
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

 export  const SidebarwithRouter = withRouter(Sidebar)
