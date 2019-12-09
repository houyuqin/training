import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class Study extends Component {
    render() {
        return (
            <Link to='/'>
            <div  className='zba'>
                    <NavBar
                        // style={{ backgroundColor: '#5d93c0', color: 'white',borderBottom:'1px solid white' }}
                        mode='dark'
                    >学习</NavBar>
                   <div style={{height:'120px',marginTop:'15%'}}>
                   <div className='zaa' style={{backgroundColor:'#6495ED',width:'32%',height:'120px',float:'left',marginLeft:'12%'}}><span className='zfont'><Link to='/jihua'>学习计划</Link></span></div>
                   <div className='zaa' style={{backgroundColor:'#6495ED',width:'32%',height:'120px',float:'left',marginLeft:'10%'}}><span className='zfont'><Link to='/homework'>我的作业</Link></span></div>
                   </div>
                   <div style={{height:'120px',marginTop:'15%'}}>
                   <div className='zaa' style={{backgroundColor:'#6495ED',width:'32%',height:'120px',float:'left',marginLeft:'12%'}}><span className='zfont'><Link to='/video'>我的视频</Link></span></div>
                   <div className='zaa' style={{backgroundColor:'#6495ED',width:'32%',height:'120px',float:'left',marginLeft:'10%'}}><span className='zfont'><Link to='/myStudy'>自我练习</Link></span></div>
                   </div>
                
                </div>
            </Link>
        )
    }
}
