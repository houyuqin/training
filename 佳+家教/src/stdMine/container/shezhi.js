import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';
import { HashRouter,Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Modal, List} from 'antd-mobile';
import Item from 'antd-mobile/lib/popover/Item';

export default class shezhi extends Component {
    constructor(){
        super();
        this.state = {
            inputValue:'',
            data:[],
            modal2: false,
        }
    }
    
    handelChange(e){
        this.setState({
            inputValue:e.target.value,
        })
    }
    onClose = key => () => {
        this.setState({
          [key]: false,
        });
    }
    baocun=()=>{
        var a={};
        a.wusername=this.wujinya1.value;
        a.wsex=this.wujinya2.value;
        a.weixinnumber=this.wujinya4.value;
        a.wclass=this.wujinya5.value;
        a.wschool=this.wujinya6.value;
        a.stdtouxiang=this.wujinyagenghuantouxiang.value;
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
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
       
    }
    componentDidMount(){
      
        let id=window.location.search.split('=')[1];
   
        fetch(`http://148.70.183.184:8006/stdmine/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            })
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
                console.log(this.state.data)
            })

        console.log(window.location.href.split('/'))
       
    }
    wujinyatiaozhuan = ()=>{
        window.location.href = 'http://'+window.location.href.split('/')[2]
        console.log(window.location.href)
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
                    {
                         this.state.data.map(item=>(
                            <ul>
                                <li>
                                    <div className='stdminetopdiv2'>头像</div>
                                    <div className='stdminetopdiv5' onClick={this.showModal('modal2')}>
                                       <img src={item.stdtouxiang}/>
                                    </div>
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
                       ))
                    } 
                    
                </div>
                <button className='stdmineshezhibutton' onClick={()=>this.wujinyatiaozhuan()}>退出登录</button>
                <Modal popup visible={this.state.modal2} animationType="slide-up" onClose={this.onClose('modal2')}>
                    <List style={{height:'100%',paddingTop:'10px',}}>
                        <input ref={i=>this.wujinyagenghuantouxiang=i} type='file'/>
                        
                    </List>
                </Modal>  
            </div>
            </HashRouter>
        )
    }
}
