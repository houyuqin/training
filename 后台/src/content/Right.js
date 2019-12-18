import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Teatcm from './Teatcm'
import Vediorcm from './Vediorcm'
import Ques from './Ques'

export default class Right extends Component {

    render(){
        return(
            <Router>
                <Switch>
                    <Route path='/' component={Teatcm}/>
                    <Route path='/vedio' component={Vediorcm}/>
                    <Route path='/question' component={Ques}/>
                </Switch>
            </Router>
        )
    }
}
