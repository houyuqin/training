import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Carousel,Button } from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


export default class Content extends Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
  
   
    fetch(`http://148.70.183.184:8005/taskt/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain; charset=UTF-8'
        },
    })
        .then((res) => res.json())
        .then((res) => {
            this.setState({ data:res.data.splice(res.data.length-1,1) })
         console.log(res.data.splice(res.data.length-1,1))
        })

}
add=()=>{
  var aa=this.daan.value;
  var id1=this.props.match.params.id;

  console.log(JSON.stringify(aa))
  fetch(`http://148.70.183.184:8005/daan/${id1}`, {
    method: "POST",
    headers: {
       'Content-Type': 'text/plain; charset=UTF-8'
    },
    body: JSON.stringify(aa)
  }).then(function(response) {
    // do sth
   
    alert('您的答案提交成功！')
  
    
  });   
  


 
}
    render() {
    
        return (
        <div>
            <NavBar
                    style={{ backgroundColor: '#708090', color: 'white' }}
                    leftContent={[
                        <Link to='/homework'><div style={{ color: 'white', marginRight: '16px' }} ><img src={require('../../img/z2.png')} style={{ width: '20px', height: '20px', color: 'white' }}></img></div></Link>
                    ]}
                >查看全文</NavBar>
   {
      this.state.data.map((item,idx)=>(
        <div style={{border:'5px dotted  rgb(177, 174, 174)',fontSize:'25px'}}><h2>题目:{item.title}</h2><p>内容:{item.content}</p>
       <div style={{color:'blue',fontWeight:'bolder'}}><p>我的答案:{item.zuoye} </p></div>
        </div>
       
      ))
    }
    
          
    <div className="cbu44">   
                       <p style={{color:'blue',fontWeight:'bolder'}}>重新提交答案:</p> 
                        <textarea name="task" cols="40" rows="5" className="cren2" ref={i=>this.daan=i}></textarea>      
                    </div>
            
                    <input type="submit" value="提交" className="cbuan" onClick={()=>this.add()}/>
        </div>
        
        )
    }
}
