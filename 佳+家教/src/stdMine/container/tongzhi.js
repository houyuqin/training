import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import logo from "../../img/caoqian.png"

export default class tongzhi extends Component {
    constructor(){
        super();
        this.state={
            data:[{content:'未收到任何消息'}]
        }
    }
    componentDidMount(){
        fetch('http://148.70.183.184:8000/inforuser')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    componentDidUpdate(){
        fetch('http://148.70.183.184:8000/inforuser')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    rtn = ()=>{
        this.props.history.push('/');
    };
    del=(id0)=>{
        let a={id:id0}
        fetch('http://148.70.183.184:8000/inforuserdel',{
            method:"DELETE",
            headers:{
                'Accept':'application/json',
                'Content-Type': 'text/plain',
            },
            body:JSON.stringify(a)
        })
        .then((res)=>{ 
            if(res.status === 200){
                return res.json();
            }else{
                
            }
        })
        .then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%',background:`url(${logo}) center center / cover no-repeat`,overflow:'scroll'}}>
                <NavBar
                mode="dark"
                icon={<Icon style={{color:'black'}} type="left" 
                onClick={this.rtn}/>}
                >消息通知</NavBar>

                {
                    this.state.data.map((item)=>(
                        <div 
                        key={item}
                        style={{width:'100%',borderBottom:'1px solid black',fontSize:20,float:'left'}}>
                            {item.content}
                            
                            <button onClick={()=>this.del(item.id)}
                            style={{backgroundColor:'rgb(31, 138, 238)',color:'white',float:'right',marginRight:5}}
                            >
                                已读删除
                            </button>
                        </div>
                    ))
                }

                
            </div>
        )
    }
}
