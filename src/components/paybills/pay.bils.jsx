import React from 'react';
import {Topnav} from '../header/header.top.nav';
import {TopHeader} from '../header/top.header';
import {Sidebar} from '../buyairtime/side-bar.nav';
import {SideMenu} from '../paybills/side.menu';


export const Paybills = ()=> {
    return (
        <header>
            <div className="bills__container">
            <TopHeader/>    
            <Topnav/>
            <Sidebar/>
            <SideMenu />
            
            </div>
        </header>
    )
}