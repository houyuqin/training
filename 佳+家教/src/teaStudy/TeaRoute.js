import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar } from 'antd-mobile';

export default class TeaStudy extends Component {

    render() {
        return (
            <div className="cteall" >
                <NavBar
                    className='stdminenavbar'
                    mode='dark'
                    rightContent={[
                    ]}z
                    >学习</NavBar>
                <div className="cshang">
                   
                <img src="./img/w头像女孩.png" style={{width:'70px',height:'70px' }} ></img>
                    <p className="cteuser1">小冰</p>
                    <p className="ctexing">星级:★★★</p>
                </div>
                
                <Link to="ctebuzhi"><div className="ctezuo">布置作业</div></Link>
                <Link to="ctebigai"><div className="cteyou">作业批改</div></Link>
            </div>
        )
    }
}
