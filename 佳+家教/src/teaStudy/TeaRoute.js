import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar } from 'antd-mobile';
let src='';
let username=''
export default class TeaStudy extends Component {
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
   componentDidMount(){
    var usr=window.location.search.split('=')[1]
       fetch(`http://148.70.183.184:8006/teamine/${usr}`,{
        method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
              
                this.setState({ data: res.data });
               if(!this.state.data[0].teatouxiang&&!this.state.data[0].wusername){
                src='./img/w头像女孩.png'
                username='未设置'
               }
               else if(this.state.data[0].teatouxiang&&!this.state.data[0].wusername)
               {
                src='./'+this.state.data[0].teatouxiang
                username='未设置'
               }
               else if(!this.state.data[0].teatouxiang&&this.state.data[0].wusername)
               {
                src='./img/w头像女孩.png'
                username=this.state.data[0].wusername
               }
               else
               {
                src='./'+this.state.data[0].teatouxiang
                username=this.state.data[0].wusername
               }
            })
   }
   componentDidUpdate() {
    var usr=window.location.search.split('=')[1]
       fetch(`http://148.70.183.184:8006/teamine/${usr}`,{
        method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
              
                this.setState({ data: res.data });
               if(!this.state.data[0].teatouxiang&&!this.state.data[0].wusername){
                src='./img/w头像女孩.png'
                username='未设置'
               }
               else if(this.state.data[0].teatouxiang&&!this.state.data[0].wusername)
               {
                src='./'+this.state.data[0].teatouxiang
                username='未设置'
               }
               else if(!this.state.data[0].teatouxiang&&this.state.data[0].wusername)
               {
                src='./img/w头像女孩.png'
                username=this.state.data[0].wusername
               }
               else
               {
                src='./'+this.state.data[0].teatouxiang
                username=this.state.data[0].wusername
               }
            })
}

    render() {
        return (
            <div className="cteall" >
                <NavBar
                    className='stdminenavbar'
                    mode='dark'
                    rightContent={[
                    ]}z
                    >教学</NavBar>
                <div className="cshang">
                   
                <img src={src} style={{width:'70px',height:'70px' }} ></img>
                    <p className="cteuser1">{username}</p>
                    <p className="ctexing">星级:★★★</p>
                </div>
                
                <Link to="ctebuzhi"><div className="ctezuo">布置作业</div></Link>
                <Link to="ctebigai"><div className="cteyou">作业批改</div></Link>
                <Link to='video'><div style={{width:'350px',height:'100px',backgroundColor:'red',marginTop:'340px',marginLeft:'30px',borderRadius:'8px',boxShadow:'5px 5px 5px rgb(129, 125, 125)',fontSize:'22px',zIndex:100,textAlign:'center',lineHeight:'100px',color:'black'}}>上传视频</div></Link>
            </div>
        )
    }
}
