import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar ,Icon} from 'antd-mobile';

export default class Teatest extends Component {
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
                        <input type="text" name="task" className="cren1"></input>
                    </div>
                    <div className="cbu4">   
                        任务题目:
                        <input type="text" name="task" className="cren1"></input>
                    </div>
                    <div className="cbu4">   
                        发布时间:
                        <input type="text" name="task" className="cren1"></input>
                    </div>
                    <div className="cbu4">   
                        发布人:
                        <input type="text" name="task" className="cren1"></input>
                    </div>
                    <div className="cbu44">   
                        内容:
                        <textarea name="task" cols="40" rows="5" className="cren2"></textarea>      
                    </div>
                    <input type="submit" value="发布" className="cbuan" />
                </div>
            </div>
        )
    }
}
