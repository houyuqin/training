import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom';

var wusername='';
var wsex='';
var wclass='';
var wschool='';

export default class Gerenziliao extends Component {
    
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
                if(!this.state.data[0].wusername){
                    wusername='未设置'
                }else{
                    wusername=this.state.data[0].wusername
                }
                if(!this.state.data[0].wsex){
                    wsex='未设置'
                }else{
                    wsex=this.state.data[0].wsex
                }
                if(!this.state.data[0].wclass){
                    wclass='未设置'
                }else{
                    wclass=this.state.data[0].wclass
                }
                if(!this.state.data[0].wschool){
                    wschool='未设置'
                }else{
                    wschool=this.state.data[0].wschool
                }
            })
    }
    componentDidUpdate(){
      
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
                if(!this.state.data[0].wusername){
                    wusername='未设置'
                }else{
                    wusername=this.state.data[0].wusername
                }
                if(!this.state.data[0].wsex){
                    wsex='未设置'
                }else{
                    wsex=this.state.data[0].wsex
                }
                if(!this.state.data[0].wclass){
                    wclass='未设置'
                }else{
                    wclass=this.state.data[0].wclass
                }
                if(!this.state.data[0].wschool){
                    wschool='未设置'
                }else{
                    wschool=this.state.data[0].wschool
                }
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
                                <ul key={item.wphonenumber}>
                                    <li>
                                        <span>用户名：{wusername}</span>
                                    </li>
                                    <li>
                                        <span>性别：{wsex}</span>
                                    </li>
                                    <li>
                                        <span>手机号：{item.wphonenumber}</span>
                                    </li>
                                    <li>
                                        <span>年级：{wclass}</span>
                                    </li>
                                    <li>
                                        <span>学校：{wschool}</span>
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
