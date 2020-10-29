import React from 'react';
import './header.top.css';
import logo from '../../img/quickpayment.png'

export const Topnav = ()=> (
    <div className="main-nav">
        <div className="main-nav-grid">
            <div id="logo">
             <img src={logo} className="image" />
            </div>
            <nav className="nav-header">
                <ul>
                <li className="item-1">Contact Us</li>
                <li className="item-2">FAQ</li>
                </ul>
            </nav>
        </div>
    </div>
    
)