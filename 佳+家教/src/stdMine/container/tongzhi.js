import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class tongzhi extends Component {
    constructor(){
        super();
        this.state={
            data:['未收到任何消息','语文作业提醒','老师回复','作业发布提醒','新上任老师查看','线上视频新发布','广告推荐','有关双十二来临课程折扣','已选课程情况','您购买的课程已过期']
        }
    }
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'white',color:'black'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >消息</NavBar>

                {
                   this.state.data.map((item,index)=>(
                    <div style={{width:'100%',height:'70px',borderBottom:'2px solid white'}} ><span className='zmess'>{item}</span>
                    <div style={{float:'right',height:'30px',width:'50px',marginRight:'25px',marginTop:'20px',color:'white'}}><img src='./img/3.png' style={{width:'20px',height:'20px'}}></img></div></div>
                   ))
               }

            </div>
        )
    }
}
