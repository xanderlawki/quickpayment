import React from 'react';
import {Topnav} from './header.top.nav';
import {HeaderMain} from './header.main';
import {Sidebar} from './side-bar.nav';
import './header.css'

export const Header =()=> (
    <header>
        <Topnav/>
        <HeaderMain/>
        <Sidebar/>


    </header>
)