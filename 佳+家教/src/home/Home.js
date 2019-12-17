import React, { Component } from 'react'
import { SearchBar,Carousel,Tabs,NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';

const imgs=['./img/11.jpg',
            './img/13.jpg',
            './img/15.png'];
const ob = [{lk:'chinese',im:'./img/语文.png',title:'语文'},
            {lk:'math',im:'./img/数学.png',title:'数学'},
            {lk:'english',im:'./img/英语.png',title:'英语'},
            {lk:'physical',im:'./img/物理.png',title:'物理'},
            {lk:'chemistry',im:'./img/化学.png',title:'化学'},
            {lk:'bios',im:'./img/生物.png',title:'生物'},
            {lk:'political',im:'./img/政治.png',title:'政治'},
            {lk:'history',im:'./img/历史.png',title:'历史'},
            {lk:'geography',im:'./img/地理.png',title:'地理'},
            {lk:'exec',im:'./img/美术.png',title:'美术'}
        ];
const tabs=[
    { title: '教师推荐', sub: '1' },
    { title: '视频推荐', sub: '2' }
]
  
export default class Home extends Component {

    states = {
        value: '',
    };
    onChange= (value) => {
        this.setState({ value });
    };
    render() {
        return (

            <div>
                <NavBar
                mode="dark"
                >佳+家教</NavBar>

                <Link to='/goodtea'>
                <div style={{ width: '100%',height:200,float:'left'}}>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {imgs.map(val => (
                        <Link to='/goodtea'
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: 200 }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                        </Link>
                    ))}
                </Carousel>
                </div>
                </Link>
                
                <div style={{width:400,margin:'0 auto'}}>
                    {                
                    ob.map((item,idx)=>(
                        <Link to={'/course?c='+item.lk}>
                        <div key={idx}>
                            <div style={{width:60,height:70,borderRadius:10,float:'left',margin:'10px 10px 10px 10px'}}>
                            <img src={item.im} 
                                alt=""
                                style={{width:45,height:45,float:'left',marginLeft:10}}
                            />
                            <div style={{fontSize:18,color:'#2a89b1',textAlign:'center'}}>{item.title}</div>
                            </div>
                        </div>
                        </Link>
                        ))
                        
                    }
                </div>





                <Link to='/ad'>
                    <div>
                       <img src='./img/ad.jpg' 
                       alt='' 
                       style={{height:130,width:'100%'}}/>
                    </div>
                </Link>

                <Tabs tabs={tabs}
                    initialPage={0}
                    tabBarActiveTextColor='#3fcccb'
                    tabBarUnderlineStyle={{border:'1px solid #3fcccb'}}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#a5cdde' }}>
                        <Link to='/goodtea'>
                            <div style={{color:'#000'}}>
                                <div style={{width:'60%',float:'left'}}>
                                <img src='./img/111.jpg' alt=''
                                style={{width:'70%'}}/>
                                </div>
                                <div style={{paddingTop:20,color:'#9b5b8b',fontWeight:'bold'}}>
                                姓名：张娇<br/>
                                年龄：29<br/>
                                毕业于河北工程大学<br/>
                                **高中教师
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#a5cdde' }}>
                        <Link to='/vedio'>
                            <div style={{color:'#000'}}>
                            {/* <Player ref="player" videoId="video-1" autoPlay muted
                                style={{width:'100%'}}>
                                <source src='vedio/math1.mp4' />
                            </Player> */}
                            <img src='./img/vedio00.png' alt="" style={{width:'100%'}}/>
                            </div>
                        </Link>
                    </div>
                </Tabs>

                <div style={{border:'1px dotted blue',width:'99%',height:35}}>
                <h2 style={{color:'#000',float:'left'}}>
                    来都来了，填个问卷再走呗！
                </h2>
                <Link to='/question'
                style={{fontSize:18,float:'left'}}>
                    <button
                    style={{backgroundColor:'#2a89b1',color:'white',width:100,marginTop:5}}>
                        填写问卷
                    </button>
                </Link>
                </div>

            </div>
        )
    }
}