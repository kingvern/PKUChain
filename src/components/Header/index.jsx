import React from 'react'

import logo from '../../public/images/logo.svg'
import Name from '../../components/Name'

import './header.css'


const Header = ({hasLogin,onClick}) => (
    <div className="Header">
        {/*<img src={logo} alt="logo"/>*/}
        {/*{!hasLogin ? <Name /> : <span>你已经有了</span>}*/}
        {/*{!hasLogin ? <Name /> : null}*/}
        <Name hasLogin={hasLogin} onClick={onClick}/>
    </div>
)

export default Header
