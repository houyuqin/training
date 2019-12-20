import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { NavBar, Icon ,Button} from 'antd-mobile';
import { Player } from 'video-react';

export default class Vedio extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    rtn=()=>{
        this.props.history.go(-1);
    }

    componentDidMount(){
        fetch("http://148.70.183.184:8000/vedio")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }

//  
render(){
    return (
        <div 
        style={{width:'100%',height:'100%'}}>
            <NavBar
            style={{backgroundColor:'rgb(50, 84, 107)'}}
            icon={<Icon type="left" />}
            onLeftClick={this.rtn}
            >课程推荐</NavBar>

        <div style={{display: 'flex',justifyContent:'space-between',flexWrap:' wrap'}}>
        {
            this.state.data.map(item=>(
                <div key={item.id}
                style={{width:'98%',paddingTop:'7px',marginTop:'15px',marginLeft:5,borderRadius:'10px',border:'1px solid rgb(174, 177, 179)',boxShadow: '3px 3px 2px rgb(174, 177, 179)',fontWeight:'bold'}}>
                    <Player ref="player" videoId="video-1" >
                        <source src={item.vedio}/>
                    </Player>
                    <div
                    style={{marginLeft:20,marginTop:'15px',marginBottom:'10px',paddingTop:10,width:100,height:50,float:'left',backgroundColor:'rgb(110, 157, 204)',color:'rgb(25, 48, 77)',borderRadius:5,fontSize:20,textAlign:'center'}}
                    >￥{item.price}</div>
                    <Button 
                    style={{marginLeft:30,marginTop:'15px',marginBottom:'10px',width:100,height:50,float:'left',backgroundColor:'rgb(221, 225, 230)'}}
                    onClick={()=>{this.love(item.vedio)}}>
                    收藏</Button> 
                    <Button style={{marginTop:'15px',marginBottom:'10px',marginLeft:30,width:100,height:50,float:'left'}}><Link to='buy'><div style={{backgroundColor:'rgb(110, 157, 204)',color:'rgb(25, 48, 77)',borderRadius:5,}}>购买</div></Link></Button> 
                </div>
            
            ))
        }
        </div>
    </div>
)}

}
