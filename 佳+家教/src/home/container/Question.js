import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { NavBar, Icon,Button,WingBlank,List, Radio,Flex} from 'antd-mobile';

export default class Question extends Component{
    rtn = ()=>{
        this.props.history.push('/tabt');
    };
    render(){
        return (
            <div 
            style={{width:'100%',height:736,background:'url(./img/2.jpg) center center / cover no-repeat'}}>
                <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={this.rtn}
                >问卷调查</NavBar>
            
            <WingBlank>
            <div>
                <h2>1.您是否有过家教？</h2>
                <div style={{fontSize:18,fontWeight:'bold'}}>
                    <input type='radio' id='2' name='ab'/>有过家教
                    <input type='radio' id='3' name='ab'/>没有过家教
                </div>
                <h2>2.您的家教一般是那一方面的？</h2>
                <div style={{fontSize:18,fontWeight:'bold'}}>
                    <input type='radio' id='1' name='ab'/>薄弱的科目
                    <input type='radio' id='2' name='ab'/>喜欢的科目
                    <input type='radio' id='3' name='ab'/>没有过家教
                </div>
                <h2>3.您对家教教师的要求？</h2>
                <div style={{fontSize:18,fontWeight:'bold'}}>
                    <input type='radio' id='1' name='aa'/>学历至少硕士
                    <input type='radio' id='2' name='aa'/>学历至少硕士
                    <input type='radio' id='3' name='aa'/>学历至少专科
                    <input type='radio' id='4' name='aa'/>在职教师
                </div>
                <h2>4.关于家教，您还有何需求？</h2>
                <textarea rows='4' style={{width:'90%'}}></textarea>
                <h2>5.您有在辅导机构补习上课吗？</h2>
                <textarea rows='4' style={{width:'90%'}}></textarea>
                <h2>6.您觉得佳+家教还有何不足之处？</h2>
                <textarea rows='4' style={{width:'90%'}}></textarea>
                <Button>提交</Button>
            </div>
            </WingBlank>

            
        </div>
        )
     }
   
}
