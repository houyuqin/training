import React, { Component } from 'react'


export default class Vediorcm extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
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
    componentDidUpdate(){
        fetch("http://148.70.183.184:8000/vedio")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    del=(id)=>{
        let a = {id:id};
        console.log(a);
        fetch('http://148.70.183.184:8000/vedio',{
            method:"DELETE",
            headers:{
                'Accept':'application/json',
                'Content-Type': 'text/plain',
            },
            body:JSON.stringify(a)
        })
        .then((res)=>{ 
            if(res.status === 200){
                alert('删除成功！');
                return res.json();
            }else{
                alert('？？？');
            }
        })
        .then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    add = ()=>{
        
    }
    render(){
        return(
               <div style={{width:'80%',height:'100%',backgroundColor:'#eee',float:'left'}}>{
                    this.state.data.map((item,idx)=>(
                            <div key={idx} style={{height:40,borderBottom:'1px solid black',paddingTop:15,fontSize:18,paddingLeft:15}}>
                                <p>视频名：{item.name}
                                <span style={{marginLeft:10}}>视频价格：{item.price}</span>
                                <span style={{marginLeft:10}}>视频存储路径：{item.vedio}</span>
                                <button 
                                style={{width:70,height:30,backgroundColor:'rgb(31, 138, 238)',float:'right',marginRight:50,color:'white'}}
                                onClick={()=>this.del(item.id)}
                                >
                                    删除
                                </button>
                                </p>
  
                            </div>
                            
                        ))
                    }
                    <button 
                    style={{width:200,height:40,backgroundColor:'#ff9900',float:'left',marginLeft:500,marginTop:50}}
                    onClick={this.add}>
                            添加视频
                    </button>
                </div> 
        )
    }
}