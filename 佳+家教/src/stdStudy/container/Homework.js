import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Carousel } from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
const tabs2 = [
    { title: '未完成' },
    { title: '已完成' },

];
export default class AppHome extends Component {
    constructor() {
        super();
        this.state = {
            data: JSON.parse(localStorage.getItem('key'))||['上海市桃浦中学 2018-2019 学年第一学期期末考试高二年级数学试卷', '上海市川沙中学2018学年高二第一学期数学期末考试卷',' 广东省深圳市福田中学2018-2019高一上期中考试数学试卷', '2018-2019年高中数学上海高考测试练习试卷'],
            data1: JSON.parse(localStorage.getItem('key1'))||[]
        }
    }
    addCom=(msg)=>{
        var todo = this.state.data[msg];
        var todo1 = this.state.data.splice(msg, 1);
        console.log(todo1)
        this.setState({
            data1: [...this.state.data1, todo1]
        }, () => {
            localStorage.setItem('key1', JSON.stringify(this.state.data1));
        }
        )
        this.setState({
            data: [...this.state.data],
        }, () => {
            localStorage.setItem('key', JSON.stringify(this.state.data))
        })
    }
    adddoing=(msg)=>{
        var todo = this.state.data1[msg];
        var todo1 = this.state.data1.splice(msg, 1);
        this.setState({
            data: [...this.state.data, todo]
        }, () => {
            localStorage.setItem('key', JSON.stringify(this.state.data));
        }
        )
        this.setState({
            data1: [...this.state.data1],
        }, () => {
            localStorage.setItem('key1', JSON.stringify(this.state.data1))
        })
    }
    dele=(msg)=>
    {
        var todo = this.state.data[msg];
        var todo1 = this.state.data.splice(msg, 1);
        this.setState({
            data: [...this.state.data]
        }, () => {
            localStorage.setItem('key', JSON.stringify(this.state.data));
        }
        ) 
    }
    dele1=(msg)=>{
        var todo = this.state.data1[msg];
        var todo1 = this.state.data1.splice(msg, 1);
        this.setState({
            data1: [...this.state.data1]
        }, () => {
            localStorage.setItem('key1', JSON.stringify(this.state.data1));
        }
        ) 
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#708090', color: 'white' }}
                    leftContent={[
                        <Link to='/'><div style={{ color: 'white', marginRight: '16px' }} ><img src={require('../../img/z2.png')} style={{ width: '20px', height: '20px', color: 'white' }}></img></div></Link>
                    ]}
                >我的作业</NavBar>
                <Tabs tabs={tabs2}
                    initialPage={0}
                    tabBarUnderlineStyle={{ border: '2px solid #ffdb2c' }}
                >
                    <div className='zheader'>
                        {this.state.data.map((item, idx) => (
                            <div style={{ height: '200px', width: '100%', borderBottom: '2px solid white' }}>
                                <div style={{ width: '75%',height:'190px' ,float: 'left' }} className='zho'>
                        <h1>任务{idx+1}</h1><p style={{color:'black'}}>{item}</p></div>
                                <div style={{ float: "left", height: '40px', width: '30px', paddingTop: '170px', marginLeft: 30 }}><img src={require('../../img/z5.png')} style={{ height: 25, width: 25 }} onClick={()=>this.addCom(idx)}></img></div>
                                <div style={{ float: "left", height: '40px', width: '30px', paddingTop: '170px', marginLeft: 10 }}><img src={require('../../img/z7.png')} style={{ height: 25, width: 25 }} onClick={()=>this.dele(idx)}></img></div>
                            </div>
                        ))}
                    </div>
                    <div >
                        {this.state.data1.map((item, idx) => (
                            <div style={{ height: '60px', width: '100%', borderBottom: '2px solid white' }}>
                                <div style={{ paddingTop: 20, width: '75%',height:'40px', float: 'left' ,overflow:'hidden',color:'black'}}>{item}</div>
                                <div style={{ float: "left", height: '40px', width: '30px', paddingTop: '17px', marginLeft: 30 }}><img src={require('../../img/z6.png')} style={{ height: 25, width: 25 }} ></img></div>
                                <div style={{ float: "left", height: '40px', width: '30px', paddingTop: '17px', marginLeft: 10 }}><img src={require('../../img/z7.png')} style={{ height: 25, width: 25 }} onClick={()=>this.dele1(idx)}></img></div>

                            </div>
                        ))}
                    </div>
                </Tabs>
            </div>
        )
    }
}