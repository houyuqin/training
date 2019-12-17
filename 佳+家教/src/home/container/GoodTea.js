import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class GoodTea extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    rtn=()=>{
        this.props.history.go(-1);
    }

    componentDidMount(){
        fetch("http://148.70.183.184:8000/tearcm")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }

    render(){
    return (
        <div 
        style={{width:'100%',background:'url(./img/3.png) center center / contain repeat-y'}}
        >
            <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={this.rtn}
            >名师推荐</NavBar>

            <div style={{paddingLeft:30,paddingTop:5}}>
                {
                    this.state.data.map(item=>(
                        <div key={item} style={{height:175}}>
                            <div style={{height:170}}>
                                <div style={{width:'45%',float:'left'}}>
                                <img src={item.head} alt=''
                                style={{width:140,height:165}}/>
                                </div>
                                <div style={{paddingTop:15,color:'#4b4b8b',fontWeight:'bold'}}>
                                    <p>姓名：{item.name} </p>
                                    <p>性别：{item.sex}</p>
                                    <p>年龄：{item.age}岁</p>
                                    <p>毕业学院：{item.graduation}</p>
                                    <p>目前职位：{item.position}</p>
                                </div>
                             </div>
                        </div>
                    ))
                }
            </div>


        </div>
        )
        }
   
}
