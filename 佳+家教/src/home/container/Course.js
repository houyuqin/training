import React, { Component } from 'react'
import { NavBar, Icon ,Button} from 'antd-mobile';
import { Player } from 'video-react';
import {Link} from 'react-router-dom';

export default class Course extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    rtn=()=>{
        this.props.history.go(-1);
    }
    love=(vedio0)=>{
        let class0 =this.props.location.search.split('=')[1];
        console.log(vedio0,class0);
        // let name0 = 'usr';
        let a = {vedio:vedio0,class:class0}
        fetch(`http://148.70.183.184:8000/mylove`,{
            method:"POST",
            headers:{
                'Content-Type': 'text/plain; charset=UTF-8',
            },
            body:JSON.stringify(a)
        }).then((res)=>{ 
            if(res.status === 200){
                alert('收藏成功！');
                return res.json(a);
            }else{
                return Promise.reject(res.json())
            }
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    componentDidMount(){
        let id = this.props.location.search.split('=')[1];
        fetch("http://148.70.183.184:8000/course/"+id)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    render(){
        return (
            <div 
            style={{width:'100%',height:'100%',background:'url(./img/2.jpg) center center / contain repeat-y'}}>
                <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={this.rtn}
                >课程推荐</NavBar>

            <div style={{display: 'flex',justifyContent:'space-between',flexWrap:' wrap'}}>
            {
                this.state.data.map(item=>(
                    <div key={item.id}
                    style={{width:'98%',marginLeft:5,border:'1px dotted blue',fontWeight:'bold'}}>
                        <div style={{width:'100%',fontSize:18,color:'red'}}>{item.name}</div>
                        {/* <Link to={'/play+'+item.vedio}> */}
                        <Player ref="player" videoId="video-1">
                            <source src={item.vedio}/>
                        </Player>
                        {/* </Link> */}

                        
                        <div
                        style={{marginLeft:20,paddingTop:10,width:100,height:50,float:'left',backgroundColor:'white',color:'blue',borderRadius:5,fontSize:20,textAlign:'center'}}
                        >￥{item.price}</div>

                        <Button 
                        style={{marginLeft:30,width:100,height:50,float:'left'}}
                        onClick={()=>{this.love(item.vedio)}}>
                        收藏</Button> 
                        <Button style={{marginLeft:30,width:100,height:50,float:'left'}}><Link to={'/buy?'+item.price+'?'+item.name+'?'+item.vedio+'?'+this.props.location.search.split('=')[1]}>购买</Link></Button> 
                    </div>
                
                ))
            }
            </div>
        </div>
    )}
   
}
