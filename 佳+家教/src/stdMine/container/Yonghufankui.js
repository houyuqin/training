import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';
import { List, TextareaItem,InputItem } from 'antd-mobile';

export default class Yonghufankui extends Component {
    render() {
        return (
            <div style={{height:'100%',backgroundColor:'#fafaf8'}}>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >用户反馈</NavBar>
                <List style={{margin:'10px',border:'1px solid rgb(250, 198, 101)'}}>
                    <TextareaItem
                        style={{padding:'10px'}}
                        placeholder="请输入反馈，我们将为您不断改进"
                        rows={5}
                        count={100}
                    />
                </List>
                <p style={{fontSize:'15px',fontWeight:'bold',marginLeft:'20px'}}>通过以下方式反馈给我们哦</p>
                <List style={{margin:'10px',border:'1px solid rgb(250, 198, 101)'}}>
                    <InputItem
                        type="phone"
                        placeholder="邮箱/手机号码"
                    >联系方式</InputItem>
                </List>
                <button className='stdmineyonghufankuibutton'>发送</button>           
            </div>
        )
    }
}
