import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';
import { Tabs, Badge } from 'antd-mobile';

const tabs = [
    { title: <Badge>未支付</Badge> },
    { title: <Badge>已支付</Badge> },
];

export default class Wodedingdan extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            data1:[]
        }
    }
    componentDidMount(){   
        fetch('http://148.70.183.184:8000/tobuy', {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            })
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
            })
        fetch('http://148.70.183.184:8000/bought', {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
                })
                .then((res) => res.json())
                .then((res) => {
                    this.setState({data1:res.data})
                })
    }
    render() {
        return (
            <div style={{height:'100%',overflow:'hidden',backgroundColor:'#fafaf8'}}>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >我的订单</NavBar>
                <Tabs tabs={tabs}
                style={{height:'100%'}}
                >
                    <div style={{overflowY:'scroll',height:'100%',paddingTop:'10px'}}>
                        {
                                this.state.data.map((item)=>(
                                    <div className='wodedingdandiv' key={item.class}>
                                        <p style={{fontSize:'15px',color:'black'}}>科目：{item.class}</p>
                                        <p>价格：{'￥'+item.price}</p>
                                        <p>订单时间：{item.time}</p>

                                    </div>
                                  
                                ))
                        }
                    </div>
                    <div style={{overflowY:'scroll',height:'100%',paddingTop:'10px'}}>
                        {
                                this.state.data1.map((item)=>(
                                    <div className='wodedingdandiv' key={item.class}>
                                        <p style={{fontSize:'15px',color:'black'}}>科目：{item.class}</p>
                                        <p>价格：{'￥'+item.price}</p>
                                        <p>订单时间：{item.time}</p>
                                        
                                    </div>
                                  
                                ))
                        }
                    </div>
                
                </Tabs>
            </div>
        )
    }
}
