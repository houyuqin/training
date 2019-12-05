import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import TabTea from './TabTea'
import GoodTea from './home/container/GoodTea'
import Ad from './home/container/Ad'
import Course from './home/container/Course'
import Vedio from './home/container/Vedio'
import Question from './home/container/Question'
import Llogin from './login/Llogin'
import Login from './login/Login'
import Logon from './login/Logon'
import AppStd from './AppStd'
import tongzhi from './stdMine/container/tongzhi'

export default class AppTea extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Llogin}></Route>
                    <Route path="/loginn" component={Login}></Route>
                    <Route path="/logonn" component={Logon}></Route>
                    <Route path='/tabt' component={TabTea} />
                    <Route path='/goodtea' component={GoodTea} />
                    <Route path='/ad' component={Ad} />
                    <Route path='/course' component={Course} />
                    <Route path='/vedio' component={Vedio} />
                    <Route path='/question' component={Question} />
                    <Route path='/tabs' component={AppStd} />
                    
                    
                    {/* <Route path='/detail/:id' component={Detail}></Route> */}
                </div>
            </Router>
        )
    }
}