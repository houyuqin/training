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
                style={{width:'98%',marginLeft:5,border:'1px dotted black',fontWeight:'bold'}}>
                    <Player ref="player" videoId="video-1">
                        <source src={item.vedio}/>
                    </Player>
                    <div
                    style={{marginLeft:20,paddingTop:10,width:100,height:50,float:'left',backgroundColor:'white',color:'blue',borderRadius:5,fontSize:20,textAlign:'center'}}
                    >￥{item.price}</div>
                    <Button 
                    style={{marginLeft:30,width:100,height:50,float:'left'}}
                    onClick={()=>{this.love(item.vedio)}}>
                    收藏</Button> 
                    <Button style={{marginLeft:30,width:100,height:50,float:'left'}}><Link to='buy'>购买</Link></Button> 
                </div>
            
            ))
        }
        </div>
    </div>
)}

}
