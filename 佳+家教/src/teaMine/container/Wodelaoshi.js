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
        var stdp=window.location.search.split('=')[1];

        fetch(`http://148.70.183.184:8000/selectstd/${stdp}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ teap: res.data });
                for (var index in this.state.teap){
                  
                     num[index]=this.state.teap[index]
                }
                for(var index in num){
                    fetch(`http://148.70.183.184:8006/stdmine/${num[index].stdphone}`, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'text/plain; charset=UTF-8'
                                },
                            })
                                .then((res) => res.json())
                                .then((res) => {
                                   for(var index in res.data)
                                   {
                                    this.setState({ data: [...this.state.data, res.data[index]] })
                                   }
                                })
                }

            })
        
        
    }
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >我的学生</NavBar>
                <div>
                    {
                        this.state.data.map((item)=>(
                                <div className='wodeshoucangdiv'>
                                    <div style={{width:'250px',height:'50px',margin:'0px 0px 0px 10px'}}>
                                        <img style={{width:'50px',height:'50px',backgroundColor:'blue',float:'left'}} src={'./'+item.stdtouxiang}></img>
                                        <span style={{padding:'12px 0px 0px 12px',fontSize:'15px',color:'black',float:'left'}}>{item.wusername}</span>
                                    </div>
                                    <p style={{fontSize:'15px',color:'black'}}>{item.wphonenumber}</p>
                                    <p style={{fontSize:'15px',color:'black'}}>{item.wclass}</p>
                                    <p style={{fontSize:'15px',color:'black'}}>{item.wschool}</p>
                                </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
