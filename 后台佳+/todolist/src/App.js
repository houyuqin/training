import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Todolist from './Todolist/Todolist'
import Todoinput from './Todolist/Todoinput'

export default class AppTea extends Component {
    render() {
        return (
            <Router>
                <div style={{height:'100%',width:'100%'}}>
                    <Route exact path='/' component={Todolist}></Route>
                    <Route path="/Todoinput" component={Todoinput}></Route>
                </div>
            </Router>
        )
    }
}