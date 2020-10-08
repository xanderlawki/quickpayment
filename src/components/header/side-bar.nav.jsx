import React from 'react';
import './side-bar.css';
import bill from '../../img/bill.png'

export const Sidebar = ()=> (
    <div className="side__bar">
    <ul className="side__bar-menu">
        
        <li className="item1">
        <div className="logo">
        <img src={bill}/>
        </div>
        <p className="item_list">Buy Airtime</p>
        </li>
        <li className="item1">
        <p className="item_list">Pay Bills</p> 
        </li>
        <li className="item1">
        <p className="item_list">Transfers</p>
        </li>
        <li className="item1">
        <p className="item_list"> Merchants</p>
        </li>
       
    </ul>
    </div>
)