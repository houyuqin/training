import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class shezhi extends Component {
    constructor(){
        super();
        this.state = {
            data:[
                <img src={require(`../../img/w头像女孩.png`)}/>,
                '我的昵称',
                '15230821745',
                '1111111'
            ]
        }
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%',backgroundColor:'#a3c6d9',position:'relative'}}>
                <NavBar
                style={{backgroundColor:'white',color:'black'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >设置</NavBar>
                <div className='stdmineshezhidiv'>
                    <ul>
                        <li>
                            <div className='stdminetopdiv2'>头像</div>
                            <div className='stdminetopdiv4'>></div>
                            <div className='stdminetopdiv5'>{this.state.data[0]}</div>
                        </li>
                        <li>
                            <div className='stdminetopdiv2'>昵称</div>
                            <div className='stdminetopdiv4'>></div>
                            <div className='stdminetopdiv3'>{this.state.data[1]}</div>
                        </li>
                        <li>
                            <div className='stdminetopdiv2'>手机号</div>
                            <div className='stdminetopdiv4'>></div>
                            <div className='stdminetopdiv3'>{this.state.data[2]}</div>
                        </li>
                        <li>
                            <div className='stdminetopdiv2'>微信</div>
                            <div className='stdminetopdiv4'>></div>
                            <div className='stdminetopdiv3'>{this.state.data[3]}</div>
                            
                        </li>
                    </ul>
                </div>
                <Link to='/'><button className='stdmineshezhibutton'>退出登录</button></Link>
            </div>
        )
    }
}
