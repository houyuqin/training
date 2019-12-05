import { Tabs} from 'antd-mobile';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const tabs2 = [
  { title: '学生登录', sub: '1' },
  { title: '教师登录', sub: '2' },
];
export default class Login extends Component {
    render() {
        return (
            <div className="cback" >
                <Link to="/"><div className="czuojian">˂</div></Link>
                <div className="ctab">
                    <Tabs tabs={tabs2}
                    style={{backgroundColor: 'rgb(222, 233, 240)'}}
                        initialPage={0}
                        tabBarPosition="top"
                        renderTab={tab => <span>{tab.title}</span>}
                        tabBarBackgroundColor='rgb(222, 233, 240)'
                        tabBarActiveTextColor='rgb(101, 160, 197)'
                       
                        tabBarTextStyle
                        >
                        <div style={{ height: '250px', backgroundColor: 'rgb(222, 233, 240)' }}>
                            <div style={{fontSize:'20px',marginLeft:'40px',marginTop:'30px',float:'left'}}>用户名:</div>
                            <input type='text' placeholder="请输入学生用户名" name='user'
                            style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'10px',marginTop:'30px',float:'left'}}
                            >
                            </input>
                            <div style={{fontSize:'20px',marginLeft:'50px',marginTop:'25px',float:'left'}}>密码:</div>
                            <input type="password" placeholder="请输入密码" name='pwd'
                                style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'20px',marginTop:'25px',float:'left'}}>
                            </input>
                            <Link to="/tabs"><input type="submit" value="登录" className="cdeng"/></Link>
                            <Link to="/logonn"><div className="czhu">注册</div></Link>
                        </div>
                        <div style={{ height: '250px', backgroundColor: 'rgb(222, 233, 240)' }}>
                            <div style={{fontSize:'20px',marginLeft:'40px',marginTop:'30px',float:'left'}}>用户名:</div>
                            <input type='text' placeholder="请输入教师用户名" name='user'
                            style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'10px',marginTop:'30px',float:'left'}}
                            >
                            </input>
                            <div style={{fontSize:'20px',marginLeft:'50px',marginTop:'25px',float:'left'}}>密码:</div>
                            <input type="password" placeholder="请输入密码" name='pwd'
                                style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'20px',marginTop:'25px',float:'left'}}>
                            </input>
                            <Link to="/tabt"><input type="submit" value="登录" className="cdeng"/></Link>
                            <Link to="/logonn"><div className="czhu">注册</div></Link>
                        </div>
                        
                    </Tabs>
                </div>
                
            </div>
        )
    }
}
     