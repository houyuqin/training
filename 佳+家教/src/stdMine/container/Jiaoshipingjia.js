import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';
import { List, TextareaItem } from 'antd-mobile';

export default class Jiaoshipingjia extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#fafaf8',height:'100%',}}>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >教师评价</NavBar>
                <p style={{paddingTop:'10px',textIndent:'2em',fontSize:'15px',fontWeight:'bold'}}>亲爱的同学们：您好！本教师评价目的在于了解同学们对老师教学建议和学习需求，您真实的回答将为我们的课程教学提供建设性的信息，谢谢您的支持与配合！</p>
                <List style={{margin:'10px',border:'1px solid rgb(250, 198, 101)'}}>
                    <TextareaItem
                        style={{padding:'10px'}}
                        placeholder="请输入教师评价"
                        rows={5}
                        count={100}
                    />
                </List>
                <button className='stdmineyonghufankuibutton'>提交</button>           
            </div>
        )
    }
}
