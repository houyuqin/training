import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';

let wusername='';

export default class Jiaoshipingjia extends Component {
    constructor(){
        super();
        this.state = {
            data:[],   
            data1:[]
        }
    }
    componentDidMount(){
        fetch('http://148.70.183.184:8005/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            })
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
            })    


        let id=window.location.search.split('=')[1];
           
        fetch(`http://148.70.183.184:8006/stdmine/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    })
                    .then((res) => res.json())
                    .then((res) => {
                        this.setState({data1:res.data})
                        wusername= this.state.data1[0].wusername;
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
                                <div style={{paddingLeft:'10px',fontSize:'15px',margin:'10px',borderLeftStyle:'dotted ' }}>
                                    <p style={{marginLeft:'20px'}}>{item.author}</p>
                                    <p>{item.pingjia}</p>
                                    <p>@{wusername}</p>
                                    <p>提交了{item.title}的任务作业</p>
                                    <p>批改时间：{item.time}</p>
                                
                                </div>
                            ))
                        }
                </div>
            </div>
        )
    }
}
