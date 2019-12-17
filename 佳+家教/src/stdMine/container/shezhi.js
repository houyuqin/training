import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';
import { HashRouter,Route } from 'react-router-dom/cjs/react-router-dom.min';


export default class shezhi extends Component {
    constructor(){
        super();
        this.state = {
            inputValue:'',
            data:[]
        }
    }
    
    handelChange(e){
        this.setState({
            inputValue:e.target.value,
        })
    }
   
    baocun=()=>{
        var a={};
        a.wusername=this.wujinya1.value;
        a.wsex=this.wujinya2.value;
        a.weixinnumber=this.wujinya4.value;
        a.wclass=this.wujinya5.value;
        a.wschool=this.wujinya6.value;
       console.log(JSON.stringify(a))
       let usr=window.location.search.split('=')[1];
     
        fetch(`http://148.70.183.184:8006/stdmine/${usr}`, {
            method: "POST",
            headers: {
               'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(a)
          }).then(function(response) {
            // do sth
          });    
          
    }
   
    render() {
        return (
            <HashRouter>
            <div style={{width:'100%',height:'100%',backgroundColor:'#a3c6d9',position:'relative'}}>
                <NavBar
                style={{backgroundColor:'white',color:'black'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                rightContent={[
                    <Link to='/'><div style={{color:'black'}} onClick={()=>this.baocun()}>保存</div></Link>,
                ]}
                >设置</NavBar>
                <div className='stdmineshezhidiv'>
                  
                            <ul>
                                <li>
                                    <div className='stdminetopdiv2'>头像</div>
                                    <Link to="/xiangqing1"><div className='stdminetopdiv4'>></div></Link>
                                    <div className='stdminetopdiv5'></div>
                                </li>
                                <li>
                                    <div className='stdminetopdiv2'>昵称</div>
                                    <div className='stdminetopdiv3'><input type='text' ref={i=>this.wujinya1=i} style={{width:'80px',textAlign:'right',backgroundColor:'#a3c6d9',border:'1px solid #a3c6d9'}} onClick={this.handelChange.bind(this)} placeholder='我的昵称'/></div>
                                </li>
                                <li>
                                    <div className='stdminetopdiv2'>性别</div>
                                    <div className='stdminetopdiv3'><input type='text' ref={i=>this.wujinya2=i} style={{width:'80px',textAlign:'right',backgroundColor:'#a3c6d9',border:'1px solid #a3c6d9'}} onClick={this.handelChange.bind(this)} placeholder='女'/></div>
                                </li>
                               
                                <li>
                                    <div className='stdminetopdiv2'>微信</div>
                                    <div className='stdminetopdiv3'><input type='text'  ref={i=>this.wujinya4=i}  style={{width:'100px',textAlign:'right',backgroundColor:'#a3c6d9',border:'1px solid #a3c6d9'}} onClick={this.handelChange.bind(this)} placeholder='111111'/></div>
                                    
                                </li>
                                <li>
                                    <div className='stdminetopdiv2'>年级</div>
                                    <div className='stdminetopdiv3'><input type='text'  ref={i=>this.wujinya5=i}  style={{width:'100px',textAlign:'right',backgroundColor:'#a3c6d9',border:'1px solid #a3c6d9'}} onClick={this.handelChange.bind(this)} placeholder='高三'/></div>
                                    
                                </li>
                                <li>
                                    <div className='stdminetopdiv2'>学校</div>
                                    <div className='stdminetopdiv3'><input type='text'  ref={i=>this.wujinya6=i}  style={{width:'100px',textAlign:'right',backgroundColor:'#a3c6d9',border:'1px solid #a3c6d9'}} onClick={this.handelChange.bind(this)} placeholder='衡水一中'/></div>
                                    
                                </li>
                            </ul>
                   
                    
                </div>
                <Link to='/loginn'><button className='stdmineshezhibutton'>退出登录</button></Link> 
            </div>
            </HashRouter>
        )
    }
}
