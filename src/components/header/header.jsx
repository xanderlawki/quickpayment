import React from 'react';
import {Topnav} from './header.top.nav';
import {HeaderMain} from './header.main';
import {SidebarwithRouter} from './side-bar.nav';
import {TopHeader} from './top.header';
import './header.css'

export const Header =(props)=> {
    console.log(props)
   return (
    <header>
        <TopHeader/>
        <Topnav/>
        <HeaderMain/>
        <SidebarwithRouter/>


    </header>
)
    }