import React, { Component } from 'react'


export default class Teatcm extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch("http://148.70.183.184:8000/tearcm")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    componentDidUpdate(prevProps,prevState){
        fetch("http://148.70.183.184:8000/tearcm")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    del=(name)=>{
        let a = {name:name};
        console.log(a);
        fetch('http://148.70.183.184:8000/tearcm',{
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
    add=()=>{
        
    }
    render(){
        return(
               <div style={{width:'80%',height:'100%',backgroundColor:'#eee',float:'left'}}>{
                    this.state.data.map((item,idx)=>(
                            <div key={idx} style={{height:40,borderBottom:'1px solid black',paddingTop:15,fontSize:18}}>
                                <p>{item.name}
                                <span>{item.sex}</span>
                                <span>{item.age}</span>
                                <span>{item.graduation}</span>
                                <span>{item.position}</span>
                                <button 
                                style={{width:70,height:30,backgroundColor:'rgb(142, 193, 255)',float:'right',marginRight:50}}
                                onClick={()=>this.del(item.name)}
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
                            添加优秀教师
                    </button>
                </div> 
        )
    }
}