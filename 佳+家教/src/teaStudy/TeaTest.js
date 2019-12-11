import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar ,Icon} from 'antd-mobile';

export default class Teatest extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    fabu=()=>{
        var a={};
        console.log(JSON.stringify(this.cren1.value))
        a.id=this.cren1.value;
        a.title=this.cren2.value;
        a.time=this.cren3.value;
        a.author=this.cren4.value;
        a.content=this.cren5.value;
       console.log(JSON.stringify(a))
    
        fetch("http://148.70.183.184:8005/taskt", {
            method: "POST",
            headers: {
               'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(a)
          }).then(function(response) {
            // do sth
          });    
    }
    render() {
        return (
            <div className='cbu'>
                <NavBar
                    style={{backgroundColor:'#708090',color:'white'}}
                    icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >布置作业</NavBar>
                <div style={{height:'600px',margin:'15px',padding:'0px 35px',borderStyle:'dotted ' }}>
                    <div className="cbu3">   
                        任务编号:
                        <input type="text" name="task" className="cren1" ref={i=>this.cren1=i}></input>
                    </div>
                    <div className="cbu4">   
                        任务题目:
                        <input type="text" name="task" className="cren1" ref={i=>this.cren2=i}></input>
                    </div>
                    <div className="cbu4">   
                        发布时间:
                        <input type="text" name="task" className="cren1" ref={i=>this.cren3=i}></input>
                    </div>
                    <div className="cbu4">   
                        发布人:
                        <input type="text" name="task" className="cren1" ref={i=>this.cren4=i}></input>
                    </div>
                    <div className="cbu44">   
                        内容:
                        <textarea name="task" cols="40" rows="5" className="cren2" ref={i=>this.cren5=i}></textarea>      
                    </div>
                    <input type="submit" value="发布" className="cbuan"  onClick={()=>this.fabu()}/>
                </div>
            </div>
        )
    }
}
