import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar,Icon } from 'antd-mobile';

var num= []

export default class Wodelaoshi extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            data1:[]
        }
    }
    componentDidMount(){
        var id=window.location.search.split('=')[1];
        
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
                  
                    fetch(`http://148.70.183.184:8006/teamine/${val}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/plain; charset=UTF-8'
                        },
                    })
                        .then((res) => res.json())
                        .then((res) => {
                            res.data.forEach((val,idx)=>{        
                                this.setState({data:[...this.state.data,val]})
                                
                            })
                        })
                })
        })    

        
        
    }
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >我的教师</NavBar>
                <div>
                    {
                        this.state.data.map((item)=>(
                                <div className='wodeshoucangdiv' key={item.wphonenumber}>
                                    <div style={{width:'250px',height:'50px',margin:'0px 0px 0px 10px'}}>
                                        <img style={{width:'50px',height:'50px',backgroundColor:'blue',float:'left'}} src={'./'+item.teatouxiang}></img>
                                        <span style={{padding:'12px 0px 0px 12px',fontSize:'15px',color:'black',float:'left'}}>{item.wusername}</span>
                                    </div>
                                    <p style={{fontSize:'15px',color:'black'}}>{item.wphonenumber}</p>
                                    <p style={{fontSize:'15px',color:'black'}}>{item.zhiwei}</p>
                                    <p style={{fontSize:'15px',color:'black'}}>{item.biyexuexiao}</p>
                                </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
