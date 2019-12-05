import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

export default class Message extends Component {
    constructor() {
        super();
        this.state = {
            data: [require('../img/0.jpg'),require('../img/1.jpg'),require('../img/3.jpg')]
        }
    }
    render() {
        return (
            <div >
                <NavBar
                    style={{ backgroundColor: '#708090', color: 'white' }}
                    leftContent={[
                        <Link to='/'><div style={{ color: 'white', marginRight: '16px' }} ><img src={require('../img/2.png')} style={{ width: '20px', height: '20px', color: 'white' }}></img></div></Link>
                    ]}
                >我的视频</NavBar>
                {
                    this.state.data.map((item, idx) => (
                        <div style={{ height: '200px', width: '100%', marginTop: '20px' }}>
                           <img src={item} style={{height:'200px',width:'100%'}}></img>
                        </div>
                    ))
                }
            </div>
        )
    }
}
