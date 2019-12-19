import React, { Component } from 'react'
import { Tabs, Badge ,Button} from 'antd-mobile';
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';


export default class Wodeshoucang extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
          
        }
    }

    componentDidMount(){   
        fetch('http://148.70.183.184:8000/mylove', {
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
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%',overflowY:'hidden',backgroundColor:'#fafaf8'}}>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >我的收藏</NavBar>
                    <div style={{overflow:'scroll',height:'100%'}}>
                            {
                                this.state.data.map(item=>(
                                  
                                    <div key={item.vedio}>
                                            <p style={{fontSize:'20px',color:'black',marginLeft:'10px'}}>{item.class} vedio</p>

                                            <Player ref="player" videoId="video-1">
                                                <source src={item.vedio}/>
                                            </Player>                                  
                                    </div>
                                ))
                            } 
                    </div>
            </div>
        )
    }
}
