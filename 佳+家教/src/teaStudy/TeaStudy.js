import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import TeaRoute from './TeaRoute'
import TeaTest from './TeaTest';
import TeaTask from './TeaTask';
import TeaReal from './TeaReal';
export default class TeaStudy extends Component {

    render() {
        return (
            <Router>                
                <div className="cteall">                        
                        <Switch> 
                            <Route exact path='/' component={TeaRoute}></Route>
                            <Route path="/ctebuzhi" component={TeaTest}></Route>
                            <Route path="/ctebigai" component={TeaTask}></Route>
                            <Route path="/teareal" component={TeaReal}></Route>
                        </Switch>             
                </div>            
            </Router>
        )
    }
}
