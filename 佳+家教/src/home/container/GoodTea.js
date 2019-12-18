import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class GoodTea extends Component{
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
        fetch("http://148.70.183.184:8006/teamine")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res
            })  
        });
    }
    selecttea=(phone)=>{
        let std = window.location.search.split('=')[1];
        console.log(std);
        let a={stdphone:std,teaphone:phone};
        fetch("http://148.70.183.184:8000/selectclass",{
            method:"POST",
            headers:{
                'Content-Type': 'text/plain; charset=UTF-8',
            },
            body:JSON.stringify(a)
        }).then((res)=>{ 
            if(res.status === 200){
                // return res.json();
                alert('已选择该教师！');
                return res.json();
            }else{
                alert('这有些错误！');
            }
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }

    render(){
    return (
        <div 
        style={{width:'100%',background:'url(./img/3.png) center center / contain repeat-y'}}
        >
            <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={this.rtn}
            >名师推荐</NavBar>

            <div style={{paddingLeft:30,paddingTop:5}}>
                {
                    this.state.data.map(item=>(
                        <div key={item} style={{height:175}}>
                            <div style={{height:170}}>
                                <div style={{width:'45%',float:'left'}}>
                                <img src={item.teatouxiang} alt=''
                                style={{width:140,height:165}}/>
                                {/* <img src={item.head} alt=''
                                style={{width:140,height:165}}/> */}
                                </div>
                                <div style={{paddingTop:15,color:'#4b4b8b',fontWeight:'bold'}}>
                                    <p>姓名：{item.wsubject} </p>
                                    <p>性别：{item.wsex}</p>
                                    <p>年龄：{item.wage}岁</p>
                                    <p>毕业学院：{item.biyexuexiao}</p>
                                    <p>目前职位：{item.zhiwei}</p>
                                    {/* <p>姓名：{item.name} </p>
                                    <p>性别：{item.sex}</p>
                                    <p>年龄：{item.age}岁</p>
                                    <p>毕业学院：{item.graduation}</p>
                                    <p>目前职位：{item.position}</p> */}
                                </div>
                                <button 
                                onClick={()=>this.selecttea(item.wphonenumber)}
                                style={{width:100,height:40,backgroundColor:'#5d93d0',color:'white'}}>选择教师</button>
                             </div>
                        </div>
                    ))
                }
            </div>


        </div>
        )
        }
   
}
