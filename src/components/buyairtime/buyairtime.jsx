import React  from 'react';
import { Topnav } from '../header/header.top.nav';
import {TopHeader} from '../header/top.header';
import {Sidebar} from './side-bar.nav';
import {AirtimeBox} from './buyairtime.box';


export const BuyAirtime = () => (
    <header>
        <div className="airtime__container">
        <TopHeader/> 
       
        <Topnav/>
        <AirtimeBox/>
        <Sidebar/>
       
        </div>
        </header>
        
    )


