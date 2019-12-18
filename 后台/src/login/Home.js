import React, { Component } from 'react'
import '../index.css'

export default class Todoinput extends Component {
    one=()=>{
        window.location = "http://localhost:8000/tearcm"
    }
    two=()=>{
        window.location = "http://localhost:8000/vedio"
    }
    three=()=>{
        window.location = "http://localhost:8000/question"
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                <div style={{width:'20%',height:'100%',backgroundColor:'#ff9900',float:'left'}}>
                    <ul>
                        <li style={{height:50,border:'1px solid blue',fontSize:30,textAlign:'center'}}
                        >
                            <a href="#" onClick={this.one} style={{color:'blue',textDecoration:'none'}}>教师推荐</a>
                        </li>
                        <li style={{height:50,border:'1px solid blue',fontSize:30,textAlign:'center'}}
                        >
                            <a href="#" onClick={this.two} style={{color:'blue',textDecoration:'none'}}>视频推荐</a>
                        </li>
                        <li style={{height:50,border:'1px solid blue',fontSize:30,textAlign:'center'}}
                        >
                            <a href="#" onClick={this.three} style={{color:'blue',textDecoration:'none'}}>问卷情况</a>
                        </li>
                    </ul>
                </div>
                <div style={{width:'80%',height:'100%',backgroundColor:'red',float:'left'}}>
                    
                </div>
            </div>
        )
    }
}
