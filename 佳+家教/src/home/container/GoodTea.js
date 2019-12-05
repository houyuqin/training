import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

var data=[];
export default class GoodTea extends Component{
    rtn=()=>{
        this.props.history.push('/tabt');
    }

    // function fetch(url){
    //     fetch(url).then(res=>res.json())
    //     .then(res=>{
    //         data += res.data;
    //     });
    //     return data;
    // }
    render(){
    return (
        <div 
        style={{width:'100%',background:'url(./img/5.jpg) center center / contain repeat-y'}}>
            <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={this.rtn}
            >名师推荐</NavBar>

            <div style={{display: 'flex',justifyContent:'space-between',flexWrap:' wrap'}}>
                {
                    [1,2,3,4,5,6].map(item=>(
                        <div key={item}
                        style={{width:'47%',height:250,margin:'3px 5px 3px 5px',border:'1px dotted black'}}>
                            <img src='./img/14.jpg' 
                            style={{width:80,height:80}} alt=''/>
                            <p>姓名：李**</p>
                            <p>年龄：34岁</p>
                            <p>职位：在职教师</p>
                            <p>毕业于首都师范大学</p>

                        </div>
                    ))

                    // fetch('http://localhost/goodtea').map(item=>(
                    //     <div key={item}>
                    //         <img src={item.head} alt=""/>
                    //         <p>{item.name}</p>
                    //         <p>{item.age}</p>
                    //         <p>{item.zhicheng}</p>
                    //         <p>{item.biyeyu}</p>
                    //     </div>
                    // ))
                }
            </div>


        </div>
        )
        }
   
}
