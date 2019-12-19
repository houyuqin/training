import React, { Component } from 'react'


export default class Ques extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch("http://148.70.183.184:8006/stdmine")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res
            })  
        });
    }
    componentDidUpdate(){
        fetch("http://148.70.183.184:8006/stdmine")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res
            })  
        });
    }
    render(){
        return(
               <div>
                   {
                    this.state.data.map((item,idx)=>(
                            <div key={idx} style={{height:40,borderBottom:'1px solid black',paddingTop:15,fontSize:18,paddingLeft:15}}>
                                <p>账号：{item.wphonenumber}
                                <span style={{marginLeft:10}}>姓名：{item.wusername}</span>
                                <span style={{marginLeft:10}}>性别：{item.wsex}</span>
                                <span style={{marginLeft:10}}>学校：{item.wschool}</span>
                                </p>
  
                            </div>
                            
                        ))
                    }
                    
                </div> 
        )
    }
}