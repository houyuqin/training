import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class Course extends Component{
    rtn=()=>{
        this.props.history.push('/tabt');
    }

    render(){
        return (
            <div 
            style={{width:'100%',background:'url(./img/2.jpg) center center / contain repeat-y'}}>
                <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={this.rtn}
                >课程推荐</NavBar>

            <div style={{display: 'flex',justifyContent:'space-between',flexWrap:' wrap'}}>
            {
                [1,2,3,4,5,6].map(item=>(
                    <div key={item}
                    style={{width:'47%',height:250,margin:'3px 5px 3px 5px',border:'1px dotted black'}}>
                        数学必修一
                    </div>
                ))
            }
            </div>


                
            </div>
        )}
   
}
