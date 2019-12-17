import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Shezhi from './container/shezhi'
import StdMine from './container/stdmine'
import Tongzhi from './container/tongzhi'
import Gerenziliao from './container/Gerenziliao';
import Wodeshoucang from './container/Wodeshoucang';
import Wodedingdan from './container/Wodedingdan';
import Jiaoshipingjia from './container/Jiaoshipingjia';
import Yonghufankui from './container/Yonghufankui';
// import shezhitouxiang from './container/shezhixiangqing/shezhitouxiang';

export default class tiaozhuan extends Component {
    render() {
        return (
            <Router>
                <div style={{height:'100%'}}>
                    <Switch>
                        <Route exact path='/' component={StdMine}></Route>
                        <Route path='/stdmineshezhi' component={Shezhi}></Route>
                        <Route path='/tongzhi' component={Tongzhi}></Route>
                        <Route path='/gerenziliao' component={Gerenziliao}></Route>
                        <Route path='/wodeshoucang' component={Wodeshoucang}></Route>
                        <Route path='/wodedingdan' component={Wodedingdan}></Route>
                        <Route path='/jiaoshipingjia' component={Jiaoshipingjia}></Route>
                        <Route path='/yonghufankui/:id' component={Yonghufankui}></Route>
                        {/* <Route path="/xiangqing1" component={shezhitouxiang}></Route> */}

                    </Switch>
                </div>
            </Router>
        )
    }
}
