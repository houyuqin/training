import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
export default class Message extends Component {
   constructor(){
       super();
       this.state={
           data:['http://www.ygjj.com/D445683.html','http://www.ygjj.com/D445450.html','http://www.ygjj.com/D444689.html','http://www.ygjj.com/D441926.html'],
           data1:[' 上海市桃浦中学 2018-2019 学年第一学期期末考试高二年级数学试卷','上海市川沙中学2018学年高二第一学期数学期末考试卷',' 广东省深圳市福田中学2018-2019高一上期中考试数学试卷',' 2018-2019年高中数学上海高考测试练习试卷']
       }
       console.log(<a href={this.state.data[0]}></a>)
   }
  
    render() {
        return (
            <div >
              <NavBar
                        style={{ backgroundColor: '#708090', color: 'white' }}
                        leftContent={[
                            <Link to='/'><div style={{ color: 'white', marginRight: '16px' }} ><img src={require('../img/2.png')} style={{ width: '20px', height: '20px', color: 'white' }}></img></div></Link>
                        ]}
                    >自我练习</NavBar>
                    {
                        this.state.data.map((item,idx)=>(
                            <div style={{width:'100%',height:'70px',borderBottom:'2px solid white',padding:'10px'}} >
                                <div style={{float:'left',width:'50px',height:'70px'}}><img src={require('../img/4.png')} style={{height:'30px',width:'50px',marginTop:'20px'}}></img></div>
                               <div style={{lineHeight:5,overflow:'hidden',height:'50px',width:'87%'}} className='zit'><a href={item} >{this.state.data1[idx]}</a></div>
                                </div>
                        ))
                    }
            </div>
        )
    }
}
