import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Llogin extends Component {
    render() {
        return (
            <div style={{backgroundImage:'url(./img/99.jpg)',height:'100%',opacity:'0.7'}}>
                <Link to="/logonn"><button className="clogon">注册</button></Link>
                <Link to="/loginn"><button className="clogin">登录</button></Link>
                <img src='./img/99.jpg' style={{marginTop:'10px'}} />
            </div>
            
        )
    }
}