import React, { Component } from 'react'
import { NavBar, Icon,Button,WingBlank} from 'antd-mobile';

export default class Question extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            name:"",
            one:"" ,// 定义选中的值，如果为空字符串，则默认不选中
            two:"",
            three:"",
            four:"",
            five:"",
            six:"",
        }
    }

    rtn = ()=>{
        this.props.history.go(-1);
    };

    getValue = (e)=>{
        console.log(e.target.value);
        this.setState({
            name:e.target.value
        })
    }
    getValue1 = (e)=>{
        console.log(e.target.value);
        this.setState({
            one:e.target.value
        })
    }
    getValue2 = (e)=>{
        console.log(e.target.value);
        this.setState({
            two:e.target.value
        })
    }
    getValue3 = (e)=>{
        console.log(e.target.value);
        this.setState({
            three:e.target.value
        })
    }
    getValue4 = (e)=>{
        console.log(e.target.value);
        this.setState({
            four:e.target.value
        })
    }
    getValue5 = (e)=>{
        if(e.keyCode === 13){
            console.log(e.target.value);
            this.setState({
                five:e.target.value
            })
        }

    }
    getValue6 = (e)=>{
        console.log(e.target.value);
        this.setState({
            six:e.target.value
        })
    }

    submit = ()=>{
        console.log(this.state)
        fetch("http://148.70.183.184:8000/question",{
            method:"POST",
            headers:{
                'Content-Type': 'text/plain; charset=UTF-8',
            },
            body:JSON.stringify(this.state)
        }).then((res)=>{ 
            if(res.status === 200){
                // return res.json();
                alert('提交成功！');
                return res.json();
            }else{
                alert('提交字段过长，请简述！');
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
            style={{width:'100%',background:'url(./img/2.jpg) center center / cover no-repeat'}}>
                <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={this.rtn}
                >问卷调查</NavBar>
            
            <WingBlank>
            <div style={{paddingLeft:10}}>
                <h2>您的昵称：<input onChange={(e)=>this.getValue(e)}></input></h2>
                <h2>1.您是否有过家教？</h2>
                <div style={{fontSize:18,fontWeight:'bold',paddingLeft:15,color:'#0025ff'}}>
                    <input type='radio' id='1' name='a0' value='有过家教'
                    // checked={this.state.one=='有过家教'}
                    onChange={(e)=>this.getValue1(e)}/>有过家教<br/>
                    <input type='radio' id='2' name='a0' value='没有过家教'
                    // checked={this.state.one=='没有过家教'}
                    onChange={(e)=>this.getValue1(e)}/>没有过家教
                </div>
                <h2>2.您的家教一般是那一方面的？</h2>
                <div style={{fontSize:18,fontWeight:'bold',paddingLeft:15,color:'#0025ff'}}>
                    <input type='radio' id='3' name='ab' value='薄弱的科目'
                    onChange={(e)=>this.getValue2(e)}/>薄弱的科目<br/>
                    <input type='radio' id='4' name='ab' value='喜欢的科目'
                    onChange={(e)=>this.getValue2(e)}/>喜欢的科目<br/>
                    <input type='radio' id='5' name='ab' value='没有过家教'
                    onChange={(e)=>this.getValue2(e)}/>没有过家教
                </div>
                <h2>3.您对家教教师的要求？</h2>
                <div style={{fontSize:18,fontWeight:'bold',paddingLeft:15,color:'#0025ff'}}>
                    <input type='radio' id='6' name='aa' value='学历至少本科'
                    onChange={(e)=>this.getValue3(e)}/>学历至少本科<br/>
                    <input type='radio' id='7' name='aa' value='学历至少专科'
                    onChange={(e)=>this.getValue3(e)}/>学历至少专科<br/>
                    <input type='radio' id='8' name='aa' value='在职教师'
                    onChange={(e)=>this.getValue3(e)}/>在职教师
                </div>
                <h2>4.您有在辅导机构补习上课吗？</h2>
                <div style={{fontSize:18,fontWeight:'bold',paddingLeft:15,color:'#0025ff'}}>
                    <input type='radio' id='9' name='ac' value='有'
                    onChange={(e)=>this.getValue4(e)}/>有<br/>
                    <input type='radio' id='10' name='ac' value='没有'
                    onChange={(e)=>this.getValue4(e)}/>没有
                </div>
                <h2>5.关于家教，您还有何需求？<span style={{fontSize:16}}>20字内</span></h2>
                <textarea rows='3' style={{width:'90%',marginLeft:15}}
                onChange={(e)=>this.getValue5(e)}></textarea>
                <h2>6.您觉得佳+家教还有何不足？<span style={{fontSize:16}}>20字内</span></h2>
                <textarea rows='3' style={{width:'90%',marginLeft:15}}
                onChange={(e)=>this.getValue6(e)}></textarea>
                
                <Button 
                onClick={()=>this.submit()}
                style={{backgroundColor:'#2a55b1',color:'white',width:200,marginLeft:90,marginTop:10}}>
                    提交
                </Button>
                <div style={{height:30}}></div>
            </div>
            </WingBlank>

            
        </div>
        )
     }
   
}
