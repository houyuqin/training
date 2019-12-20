import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';

var num= [];
export default class Jiaoshipingjia extends Component {
    constructor(){
        super();
        this.state = {
            data:[],   
            data1:[]
        }
    }
    componentDidMount(){
        // fetch('http://148.70.183.184:8005/tasks', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'text/plain; charset=UTF-8'
        //     },
        //     })
        //     .then((res) => res.json())
        //     .then((res) => {
        //         this.setState({data:res.data})
              
        //     })    


        let id=window.location.search.split('=')[1];
        fetch(`http://148.70.183.184:8000/selecttea/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ data1: res.data });
                this.state.data1.forEach((val,index)=>{
                    num[index]=val.teaphone
                    return num
                })
                num.forEach((val,idx)=>{
                  
                    fetch(`http://148.70.183.184:8005/taskss/${val}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/plain; charset=UTF-8'
                        },
                    })
                        .then((res) => res.json())
                        .then((res) => {
                            res.data.forEach((val,idx)=>{        
                                this.setState({data:[...this.state.data,val]})
                                console.log(this.state.data)
                            })
                        })
                })
        })  
    }
    render() {
        return (
            <div style={{backgroundColor:'#fafaf8',height:'100%',}}>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >作业评价情况</NavBar>
                <div style={{height:'640px',overflow:'scroll'}}>
                        {
                            this.state.data.map((item)=>(
                                <div style={{fontSize:'18px',padding:'20px'}} key={item.wphonenumber}>
                                    <p style={{marginLeft:'0px'}}>教师：{item.author}</p>
                                    <p style={{marginLeft:'0px'}}>评价内容：{item.pingjia}</p>
                                    <div style={{borderLeftStyle:'solid',paddingLeft:'5px'}}>
                                    <p style={{fontSize:'15px'}}>提交了任务名为 <span style={{color:'red',fontSize:'15px'}}>{item.title}</span> 的任务作业</p>
                                    <p style={{float:'right',color:'gray',fontSize:'15px'}}>{item.time}</p>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        )
    }
}
