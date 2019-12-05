import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

var data=[];
export default class Vedio extends Component{
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
            >视频推荐</NavBar>

            <div style={{display: 'flex',justifyContent:'space-between',flexWrap:' wrap'}}>
            {
                [1,2,3,4,5,6].map(item=>(
                    <div key={item}
                    style={{width:'47%',height:250,margin:'3px 5px 3px 5px',border:'1px dotted black'}}>
                        <img src='./img/14.jpg' 
                        style={{width:200,height:200}} alt=''/>

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
    )}
   
}
