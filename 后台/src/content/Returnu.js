import React, { Component } from 'react'


export default class Returnu extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch("http://148.70.183.184:8006/return")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    componentDidUpdate(){
        fetch("http://148.70.183.184:8006/return")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    // del=(name)=>{
    //     let a = {name:name};
    //     console.log(a);
    //     fetch('http://148.70.183.184:8006/return',{
    //         method:"DELETE",
    //         headers:{
    //             'Accept':'application/json',
    //             'Content-Type': 'text/plain',
    //         },
    //         body:JSON.stringify(a)
    //     })
    //     .then((res)=>{ 
    //         if(res.status === 200){
    //             alert('删除成功！');
    //             return res.json();
    //         }else{
    //             alert('？？？');
    //         }
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //     }).catch((err)=>{
    //         console.log(err);
    //     });
    // }
    // add=()=>{
        
    // }
    render(){
        return(
               <div style={{width:'80%',height:'100%',backgroundColor:'#eee',float:'left'}}>
                   {
                    this.state.data.map((item,idx)=>(
                            <div key={idx} style={{height:40,borderBottom:'1px solid black',paddingTop:15,fontSize:18,paddingLeft:15}}>
                                <p>{item.wphonenumber}
                                <span style={{marginLeft:10}}>{item.wusername}</span>
                                <span style={{marginLeft:10}}>{item.wcontent}</span>

                                <button 
                                style={{width:70,height:30,backgroundColor:'rgb(31, 138, 238)',float:'right',marginRight:50}}
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