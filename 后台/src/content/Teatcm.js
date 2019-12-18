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
    componentDidUpdate(){
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
               <div>
                   <h2 style={{height:50,borderBottom:'1px solid black',marginTop:10}}>教师信息：</h2>
                   {
                    this.state.data.map((item,idx)=>(
                            <div key={idx} style={{height:40,borderBottom:'1px solid black',paddingTop:15,fontSize:18,paddingLeft:15}}>
                                <p>{item.name}
                                <span style={{marginLeft:10}}>{item.sex}</span>
                                <span style={{marginLeft:10}}>{item.age}</span>
                                <span style={{marginLeft:10}}>{item.graduation}</span>
                                <span style={{marginLeft:10}}>{item.position}</span>

                                <button 
                                style={{width:70,height:30,backgroundColor:'rgb(31, 138, 238)',float:'right',marginRight:50,color:'white'}}
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