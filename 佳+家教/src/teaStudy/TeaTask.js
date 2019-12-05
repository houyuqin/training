import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar ,Icon} from 'antd-mobile';

export default class TeaTask extends Component {
    render() {
        return (
            <div className='cbu'>
                <NavBar
                    style={{backgroundColor:'#708090',color:'white'}}
                    icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >作业批改</NavBar>
                <div style={{height:'600px',margin:'15px',padding:'0px 20px',borderStyle:'dotted ' ,overflow:'scroll'}}>
                    <Link to="/teareal">
                        <div className="cgaii">
                            <div className="cgai1">
                                <p>任务编号：任务一</p>
                                <p>任务题目：数学</p>
                                <p>作业人：侯玉芹</p>
                            </div>
                            <div className="cgai2">></div>
                        </div>
                    </Link>
                    
                    <Link to="/teareal">
                        <div className="cgaii">
                            <div className="cgai1">
                                <p>任务编号：任务二</p>
                                <p>任务题目：英语</p>
                                <p>作业人：周宣</p>
                            </div>
                            <div className="cgai2">></div>
                        </div>
                    </Link>
                    <Link to="/teareal">
                        <div className="cgaii">
                            <div className="cgai1">
                                <p>任务编号：任务三</p>
                                <p>任务题目：语文</p>
                                <p>作业人：曹倩</p>
                            </div>
                            <div className="cgai2">></div>
                        </div>
                    </Link>
                    <div></div>
                </div>   
            </div>
        )
    }
}
