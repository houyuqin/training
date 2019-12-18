import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom';


export default class Gerenziliao extends Component {
    
    constructor(){
        super();
        this.state = {
            data:[],
        }
    }
    componentDidMount(){
      
        let id=window.location.search.split('=')[1];
   
        fetch(`http://148.70.183.184:8006/teamine/${id}`, {
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
            <div style={{width:'100%',height:'100%',backgroundColor:'#fafaf8'}}>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >个人资料</NavBar>
               <Router>
                    <div className='stdminebody'>
                        {
                            this.state.data.map((item)=>(
                                <ul>
                                    <li>
                                        <span>用户名：{item.wusername}</span>
                                    </li>
                                    <li>
                                        <span>性别：{item.wsex}</span>
                                    </li>
                                    <li>
                                        <span>手机号：{item.wphonenumber}</span>
                                    </li>
                                    <li>
                                        <span>学历：{item.xueli}</span>
                                    </li>
                                    <li>
                                        <span>科目：{item.wsubject}</span>
                                    </li>
                                </ul>
                            ))
                        }
                         
                    </div>
                </Router> 
            </div>
        )
    }
}
