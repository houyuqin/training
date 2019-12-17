import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "../index.css"
export default class Todoing extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return (
            <div className="ll">
                <h1 className="h">正在进行     {this.props.todo.length}</h1>
                <ul className="list">
                    {
                        this.props.todo.map((item,idx)=><li key={idx}>
                        <div className="li">
                            <div className="lli"></div>
                            <input className="llii" type="checkbox" name="checkbox1" value="checkbox复选2" 
                             onClick={()=>{this.props.getDel(idx)}} />                      
                            {item}
                        
                            <button onClick={()=>{this.props.delTodo(idx)}} className="xx">X</button>
                        </div></li>)
                    }
                </ul>
                <h1 className="h">已经完成     {this.props.todo1.length}</h1>
                <ul className="list">
                    {
                        this.props.todo1.map((item,idx1)=><li key={idx1}>
                        <div className="li1">
                            <div className="lli"></div>
                            <input className="llii" type="checkbox" name="checkbox1" value="checkbox复选2" 
                            checked
                            onClick={()=>{this.props.getFun(idx1)}} />
                            {item}
                            <button onClick={()=>{this.props.delTodo1(idx1)}} className="xx1">X</button>
                            </div></li>
                       )
                    }
                </ul>
            </div>
        )
    }
}
Todoing.propTypes = {
    todo: PropTypes.array
}
Todoing.defaultProps = {
    todo: [2,3,4],
    a: 100
}

