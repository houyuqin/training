import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';
import { List, TextareaItem } from 'antd-mobile';

export default class Jiaoshipingjia extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#fafaf8',height:'100%',}}>
                <NavBar
                style={{backgroundColor:'white',color:'black'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >学生作业</NavBar>
                <p style={{paddingTop:'10px',textIndent:'2em',fontSize:'15px',fontWeight:'bold'}}>学生作业情况</p>
                <List style={{margin:'10px',border:'1px solid rgb(250, 198, 101)'}}>
                    <TextareaItem
                        style={{padding:'10px'}}
                        placeholder="作业提交情况"
                        rows={5}
                        count={100}
                    />
                </List>
                <button className='stdmineyonghufankuibutton'>提交</button>           
            </div>
        )
    }
}
