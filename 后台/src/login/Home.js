/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import '../index.css'
import Right from '../content/Right'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

export default class Todoinput extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         data:[]
    //     }
    // }
    // componentDidMount(){
    //     fetch("http://148.70.183.184:8000/tearcm")
    //     .then(res=>res.json())
    //     .then(res=>{
    //         this.setState({
    //             data:res.data
    //         })  
    //     });
    // }
    // componentDidUpdate(prevProps,prevState){
    //     fetch("http://148.70.183.184:8000/tearcm")
    //     .then(res=>res.json())
    //     .then(res=>{
    //         this.setState({
    //             data:res.data
    //         })  
    //     });
    // }
    // one=()=>{
    //     window.location = "http://localhost:8000/tearcm"
    //     fetch("http://148.70.183.184:8000/tearcm")
    //     .then(res=>res.json())
    //     .then(res=>{
    //         this.setState({
    //             data:res.data
    //         })  
    //     });
    // }
    // two=()=>{
    //     window.location = "http://localhost:8000/vedio"
    // }
    // three=()=>{
    //     window.location = "http://localhost:8000/question"
    // }
    // del=(name)=>{
    //     let a = {name:name};
    //     console.log(a);
    //     fetch('http://148.70.183.184:8000/tearcm',{
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
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                <div style={{width:'20%',height:'100%',backgroundColor:'#ff9900',float:'left'}}>
                    <ul>
                    <li style={{height:50,borderBottom:'1px solid blue',fontSize:30}}></li>
                        <Router>
                        <Link to='/'>
                        <li style={{height:50,borderBottom:'1px solid blue',fontSize:30,textAlign:'center'}}>
                            教师推荐
                        </li></Link>
                        
                        <Link to='/vedio'>
                        <li style={{height:50,borderBottom:'1px solid blue',fontSize:30,textAlign:'center'}}>
                            视频推荐
                        </li></Link>

                        <Link to='/question'>
                        <li style={{height:50,borderBottom:'1px solid blue',fontSize:30,textAlign:'center'}}>
                            问卷情况
                        </li></Link>

                        </Router>
                    </ul>
                </div>
                
                <div style={{width:'80%',height:'100%',backgroundColor:'#eee',float:'left',overFlow:'scroll'}}>
                    {/* <Router>
                    <div>
                        <Route path='/' component={Teatcm}/>
                        <Route path='/vedio' component={Vediorcm}/>
                        <Route path='/question' component={Ques}/>
                    </div>
                    </Router> */}
                    <Right />
                </div>
            </div>
        )
    }
}
