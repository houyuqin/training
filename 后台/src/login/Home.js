import React, { Component } from 'react'
import '../index.css'
import {HashRouter as Router,Route,Switch,Link} from 'react-router-dom'
import Teatcm from '../content/Teatcm'
import Vediorcm from '../content/Vediorcm'
import Ques from '../content/Ques'
import Returnu from '../content/Returnu'
import Teauser from '../content/Teauser'
import Stduser from '../content/Stduser'

export default class Todoinput extends Component {
    render() {
        return (
            <Router>

            
            <div style={{width:'100%',height:'100%'}}>
                <div style={{width:'20%',height:'100%',backgroundColor:'#ff9900',float:'left'}}>
                    <ul>
                    <li style={{height:50,borderBottom:'1px solid blue',fontSize:30}}></li>
                        
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
                        
                        <Link to='/returnu'>
                        <li style={{height:50,borderBottom:'1px solid blue',fontSize:30,textAlign:'center'}}>
                            用户反馈
                        </li></Link>

                        <Link to='/tea'>
                        <li style={{height:50,borderBottom:'1px solid blue',fontSize:30,textAlign:'center'}}>
                            教师列表
                        </li></Link>

                        <Link to='/std'>
                        <li style={{height:50,borderBottom:'1px solid blue',fontSize:30,textAlign:'center'}}>
                            学生列表
                        </li></Link>

                        
                    </ul>
                </div>
                
                    
                    <div style={{width:'80%',height:10000,backgroundColor:'#eee',float:'left',overFlow:'scroll'}}>
                        <Switch>
                            <Route exact path='/' component={Teatcm}/>
                            <Route path='/vedio' component={Vediorcm}/>
                            <Route path='/question' component={Ques}/>
                            <Route path='/returnu' component={Returnu}/>
                            <Route path='/tea' component={Teauser}/>
                            <Route path='/std' component={Stduser}/>
                        </Switch>
                        
                    </div>
            </div>
        </Router>
        )
    }
}