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
        fetch("http://148.70.183.184:8000/mylove")
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
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={this.rtn}
            >我的视频</NavBar>

        <div style={{display: 'flex',justifyContent:'space-between',flexWrap:' wrap'}}>
        {
            this.state.data.map(item=>(
                <div key={item.id}
                style={{width:'98%',marginLeft:5,border:'1px dotted black',marginTop:5,fontWeight:'bold'}}>
                    <Player ref="player" videoId="video-1">
                        <source src={item.vedio}/>
                    </Player>
                   
                   
                  
                </div>
            
            ))
        }
        </div>
    </div>
)}

}
