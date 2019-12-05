import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class Ad extends Component{
    rtn=()=>{
        this.props.history.push('/tabt');
    }

    render(){
    return (
        <div 
        style={{width:'100%',height:736,background:'url(./img/3.png) center center / cover no-repeat'}}>
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={this.rtn}
            >广告</NavBar>

            <div style={{textAlign:'center'}}>
            <img src='./img/ad1.jpg' 
                alt=''
                style={{width:'100%'}}
            />
                <h1><b>天猫双十二盛大来袭</b></h1>
                <h2><b>继双十一盛典后的又一次活动</b></h2>
                <h2><b>天猫双十二回归</b></h2>
                <h2><b>打破底价</b></h2>
                <h2><b>没有最省，只有更省</b></h2>
                <h2><b>快快来吧！</b></h2>
            </div>


            
        </div>
    )}
   
}