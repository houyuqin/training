import React, { Component} from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import logo from "../../img/caoqian.png"
export default class stdmine extends Component {
    constructor(){
        super();
        this.state = {
            data:[
                <img src={require(`../../img/w头像女孩.png`)}/>,
                '我的昵称'
            ]
        }
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%',height:'100%', background:`url(${logo}) center center / cover no-repeat`,opacity:'1'}}>
                <Router>
                    <NavBar
                    className='stdminenavbar'
                    // style={{backgroundColor:'white',color:'black'}}
                    mode='dark'
                    rightContent={[
                        <Link to='/stdmineshezhi'><div><img key='0' src={require(`../../img/w设置.png`)}/></div></Link>,
                        <Link to='/tongzhi'><img key='1' src={require(`../../img/w通知.png`)}/></Link>
                    ]}
                    >我的</NavBar>
                    <div className='stdminetopdiv'>
                        <div className='stdminetopdiv0'>{this.state.data[0]}</div>
                        <div className='stdminetopdiv1'>{this.state.data[1]}</div>
                    </div>
                    <div className='stdminebody'>
                        <ul>
                            <li>
                            <Link to='/gerenziliao'><img src={require(`../../img/w个人资料.png`)}/><span>个人资料</span></Link>
                            </li>
                            <li>
                            <Link to='/wodeshouyi'><img src={require(`../../img/w我的收藏.png`)}/><span>我的收益</span></Link>
                            </li>
                         
                            <li>
                            <Link to='/jiaoshipingjia'><img src={require(`../../img/w评价.png`)}/><span>学生作业</span></Link>
                            </li>
                            <li>
                            <Link to='/yonghufankui'><img src={require(`../../img/w用户反馈.png`)}/><span>用户反馈</span></Link>
                            </li>
                        </ul>
                    </div>
                </Router> 
            </div>
        )
    }
}
