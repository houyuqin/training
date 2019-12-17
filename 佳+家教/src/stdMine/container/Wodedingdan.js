import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';
import { Tabs, Badge } from 'antd-mobile';

const tabs = [
    { title: <Badge text={'2'}>未支付</Badge> },
    { title: <Badge>已支付</Badge> },
];

export default class Wodedingdan extends Component {
    componentDidMount(){   
        fetch('http://148.70.183.184:8000/mylove', {
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
            <div style={{height:'100%',overflow:'hidden',backgroundColor:'#fafaf8'}}>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >我的订单</NavBar>
                <Tabs tabs={tabs}
                style={{height:'100%'}}
                >
                    <div style={{overflowY:'scroll',height:'100%',paddingTop:'10px'}}>
                        <div className='wodedingdandiv'>
                            <p style={{fontSize:'15px',color:'black'}}>未支付订单一</p>
                            <p>购买数学视频--函数与极限</p>
                        </div>
                        <div className='wodedingdandiv'>
                            <p style={{fontSize:'15px',color:'black'}}>未支付订单二</p>
                            <p>购买数学视频--微积分</p>
                        </div>
                    </div>
                    <div style={{overflow:'scroll', height:'100%', paddingTop:'10px'}}>
                        <div className='wodedingdandiv'>
                            <p style={{fontSize:'15px',color:'black'}}>已支付订单一</p>
                            <p>购买数学视频--基础知识过关</p>
                        </div>
                    </div>
                </Tabs>
            </div>
        )
    }
}
