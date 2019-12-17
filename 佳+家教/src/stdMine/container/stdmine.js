import React, { Component} from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import logo from "../../img/zhouxuan.png"

export default class stdmine extends Component {
    
    constructor(){
        super();
        this.state = {
            data:[],
          
        }
    }
    componentDidMount(){
      
        let id=window.location.search.split('=')[1];
   
        fetch(`http://148.70.183.184:8006/stdmine/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            })
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
            })
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%', background:`url(${logo}) center center / cover no-repeat`}}>
                <Router>
                    <NavBar
                    className='stdminenavbar'
                    // style={{backgroundColor:'white',color:'black'}}
                    mode='dark'
                    rightContent={[
                        <Link to={'/stdmineshezhi'}><div><img key='0' src={require(`../../img/w设置.png`)}/></div></Link>,
                        <Link to='/tongzhi'><img key='1' src={require(`../../img/w通知.png`)}/></Link>
                    ]}
                    >我的</NavBar>
                    <div>
                        {
                            this.state.data.map(item=>(
                                <div>
                                    <div className='stdminetopdiv'>
                                        <div>
                                            <div className='stdminetopdiv0'></div>
                                            <div className='stdminetopdiv1'>{item.wusername}</div>
                                        </div>                 
                                    </div>
                                    <div className='stdminebody'>
                                        <ul>
                                            <li>
                                            <Link to='/gerenziliao'><img src={require(`../../img/w个人资料.png`)}/><span>个人资料</span></Link>
                                            </li>
                                            <li>
                                            <Link to='/wodeshoucang'><img src={require(`../../img/w我的收藏.png`)}/><span>我的收藏</span></Link>
                                            </li>
                                            <li>
                                            <Link to='/wodedingdan'><img src={require(`../../img/w我的订单.png`)}/><span>我的订单</span></Link>
                                            </li>
                                            <li>
                                            <Link to='/jiaoshipingjia'><img src={require(`../../img/w评价.png`)}/><span>作业评价情况</span></Link>
                                            </li>
                                            <li>
                                            <Link to={'/yonghufankui/'+item.wusername}><img src={require(`../../img/w用户反馈.png`)}/><span>意见反馈</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))
                        } 
                    </div>
                </Router>
            </div>
        )
    }
}
