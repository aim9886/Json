import React from 'react'
import Home from './components/Home';
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div style={{display : "flex" , border : "2px solid red" , justifyContent : "space-between"}}>
        <div>
            logo
        </div>
        <div>
            <ul style={{display : "flex" , justifyContent : "space-around" , width : "300px"}}>
                <li>
                    <Link to="/home">HOME</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav