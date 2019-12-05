import React, { Component } from 'react'
import { SearchBar,Carousel,Tabs,NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom';

const imgs=['./img/11.jpg',
            './img/13.jpg',
            './img/15.png'];
const ob = [{im:'./img/语文.png',title:'语文'},
            {im:'./img/数学.png',title:'数学'},
            {im:'./img/英语.png',title:'英语'},
            {im:'./img/物理.png',title:'物理'},
            {im:'./img/化学.png',title:'化学'},
            {im:'./img/生物.png',title:'生物'},
            {im:'./img/政治.png',title:'政治'},
            {im:'./img/历史.png',title:'历史'},
            {im:'./img/地理.png',title:'地理'},
            {im:'./img/美术.png',title:'美术'}
        ];
const tabs=[
    { title: '教师推荐', sub: '1' },
    { title: '视频推荐', sub: '2' }
]
  
export default class Home extends Component {
    state = {
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

                <div style={{width:'100%',float:'left'}}>
                <SearchBar
                    value={this.state.value}
                    placeholder="语文"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    showCancelButton
                    onChange={this.onChange}
                />
                </div>
                {/* <div style={{width:'10%',height:40,float:'left',padding:'5px 5px'}}>
                    <Link to='/tongzhi'><img src='./img/消息1.png' alt="" style={{width:30,height:30}} /></Link>
                </div> */}


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
                
                <Link to='/course'>
                <div style={{width:400,margin:'0 auto'}}>
                    {                
                    ob.map((item,idx)=>(
                        <div key={idx}>
                            <div style={{width:60,height:70,borderRadius:10,float:'left',margin:'10px 10px 10px 10px'}}>
                            <img src={item.im} 
                                alt=""
                                style={{width:45,height:45,float:'left',marginLeft:10}}
                            />
                            <div style={{fontSize:18,color:'#2a89b1',textAlign:'center'}}>{item.title}</div>
                            </div>
                        </div>
                        ))
                        
                    }
                </div>
                </Link>

              
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
                                姓名：王**<br/>
                                年龄：42<br/>
                                毕业于河北师范大学<br/>
                                **中学在职教师
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#a5cdde' }}>
                        <Link to='/vedio'>
                            <div style={{color:'#000'}}>
                                vedio
                            </div>
                        </Link>
                    </div>
                </Tabs>

                <div>
                <h2 style={{color:'#000',float:'left'}}>
                    来都来了，填个问卷再走呗！
                </h2>
                <Link to='/question'
                style={{fontSize:18,float:'left'}}>
                    填写问卷
                </Link>
                </div>

            </div>
        )
    }
}