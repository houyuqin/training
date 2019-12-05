import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom';

export default class Gerenziliao extends Component {
    constructor(){
        super();
        this.state = {
            data:[
                '我的昵称',
                '女',
                '15230821745',
                '本科',
                '英语'
            ]
        }
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%',backgroundColor:'#fafaf8'}}>
                <NavBar
                style={{backgroundColor:'white',color:'black'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >个人资料</NavBar>
               <Router>
                    <div className='stdminebody1'>
                        <ul>
                            <li>
                                <span>用户名：{this.state.data[0]}</span>
                            </li>
                            <li>
                                <span>性别：{this.state.data[1]}</span>
                            </li>
                            <li>
                                <span>手机号：{this.state.data[2]}</span>
                            </li>
                            <li>
                                <span>学历：{this.state.data[3]}</span>
                            </li>
                            <li>
                                <span>科目：{this.state.data[4]}</span>
                            </li>
                        </ul>
                    </div>
                </Router> 
            </div>
        )
    }
}
