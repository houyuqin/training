import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Carousel, Button } from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const tabs2 = [
    { title: '未完成' },
    { title: '已完成' },

];
const id1 = 1;
let ni = ''
const num=[]
let aaa;
export default class AppHome extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            data1: [],
            nicheng: [],
            teap:[]
        }
    }
    componentDidMount() {
        var stdp=window.location.search.split('=')[1];
        fetch(`http://148.70.183.184:8006/stdmine/${stdp}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        }).then((res)=>res.json())
        .then((res)=>{
            this.setState({nicheng:res.data})
            ni=this.state.nicheng[0].wusername
        })
      
        fetch(`http://148.70.183.184:8000/selecttea/${stdp}`,{
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
                    fetch(`http://148.70.183.184:8005/taskfabu/${num[index].teaphone}`, {
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
        fetch(`http://148.70.183.184:8005/tasks/${stdp}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ data1: res.data });
            })


        var usr = window.location.search.split('=')[1];
        fetch(`http://148.70.183.184:8006/stdmine/${usr}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({nicheng: res.data})
              
            })

    }
    componentDidUpdate(){
        var stdp=window.location.search.split('=')[1];
        fetch(`http://148.70.183.184:8005/tasks/${stdp}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ data1: res.data });
            })
          
}

    addCom = (msg) => {
        var stdp=window.location.search.split('=')[1];
        fetch(`http://148.70.183.184:8005/wanchengren/${stdp}`, {
            method: "POST",
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(ni)
        }).then((res) => {
           
        });
        fetch(`http://148.70.183.184:8005/taskwancheng/${stdp}`, {
            method: "POST",
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(this.state.data[msg])
        }).then((res) => {
            alert('此任务已完成并提交！')
        });


    }
    display = () => {
        alert('您的此项任务已完成，若要永久删除请按删除键！')
    }
    dele = (msg) => {
        var id = this.state.data[msg].id
        fetch(`http://148.70.183.184:8005/taskt/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                alert('任务删除成功!')
            })
    }
    dele1 = (msg) => {
        var id = this.state.data1[msg].id

        fetch(`http://148.70.183.184:8005/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                alert('任务永久删除成功!')
            })
    }
    show = (msg) => {
        var id1 = this.state.data1[msg].id
aaa=id1;
        fetch(`http://148.70.183.184:8005/tasks/${id1}`, {
            method: "GET",
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(this.state.data[msg])
        }).then((res) => {

        });
        id1 = this.state.data1[msg].content;
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
                            <div style={{ height: '240px', width: '100%', borderBottom: '2px solid white' }}>
                                <div style={{ width: '75%', height: '210px', float: 'left', overflow: 'auto' }} className='zho'>
                                    <h2>任务{idx + 1}&nbsp;&nbsp; <h4>{item.title}</h4> </h2>
                                    <p style={{ fontSize: '20px', color: 'green' }}>科目类型：{item.kemu}</p>
                                    <p style={{ fontSize: '20px', color: 'green' }}>完成时间：{item.time}</p>
                                    <p style={{ fontSize: '20px', color: 'green' }}>发布教师:{item.author}</p>
                                    <Button style={{ backgroundColor: '	#FFC0CB' }}><Link to={'/taskt/' + item.id} style={{ color: 'green' }}>查看全文</Link></Button>

                                </div>
                                <div style={{ float: "left", height: '40px', width: '30px', paddingTop: '170px', marginLeft: 30 }}><img src={require('../../img/z5.png')} style={{ height: 25, width: 25 }} onClick={() => this.addCom(idx)}></img></div>
                                <div style={{ float: "left", height: '40px', width: '30px', paddingTop: '170px', marginLeft: 10 }}><img src={require('../../img/z7.png')} style={{ height: 25, width: 25 }} onClick={() => this.dele(idx)}></img></div>
                            </div>
                        ))}
                    </div>
                    <div >
                        {this.state.data1.map((item, idx) => (
                            <div style={{ height: '50px', width: '100%', borderBottom: '2px solid white' }}>
                                <div style={{ width: '45%', height: '40px', float: 'left', overflow: 'hidden', color: 'black' }} >
                                    <p style={{ fontSize: '25px', color: 'black' }}>{item.id}----{item.title}</p>

                                </div>
                                <div style={{ width: '30%', height: '60px', float: 'left' }}>
                                    <Button style={{}}><Link to={'/tasks/' + item.id} style={{ color: 'green' }}>查看全文</Link></Button>
                                </div>
                                <div style={{ float: "left", height: '40px', width: '30px', paddingTop: '17px', marginLeft: 30 }}><img src={require('../../img/z6.png')} style={{ height: 25, width: 25 }} onClick={() => this.display()}></img></div>
                                <div style={{ float: "left", height: '40px', width: '30px', paddingTop: '17px', marginLeft: 10 }}><img src={require('../../img/z7.png')} style={{ height: 25, width: 25 }} onClick={() => this.dele1(idx)}></img></div>
                            </div>
                        ))}
                    </div>
                </Tabs>
            </div>
        )
    }
}