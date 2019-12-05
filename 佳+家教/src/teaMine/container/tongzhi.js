import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';

export default class tongzhi extends Component {
    constructor(){
        super();
        this.state={
            data:['未收到任何消息','学生作业情况','广告推荐','有关双十二来临课程折扣','您购买的课程已过期']
        }
    }
    rtn = ()=>{
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'white',color:'black'}}
                icon={<Icon style={{color:'black'}} type="left" onClick={this.rtn}/>}
                >消息</NavBar>

                {
                   this.state.data.map((item,index)=>(
                    <div key={index}>
                    <div style={{width:'100%',height:'70px',borderBottom:'2px solid white'}} ><span className='zmess'>{item}</span>
                    <div style={{float:'right',height:'30px',width:'50px',marginRight:'25px',marginTop:'20px',color:'white'}}><img src='./img/3.png' style={{width:'20px',height:'20px'}}></img></div></div>
                    </div>
                   ))
               }
            </div>
        )
    }
}
