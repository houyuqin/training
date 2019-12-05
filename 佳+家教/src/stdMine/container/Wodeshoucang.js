import React, { Component } from 'react'
import { Tabs, Badge } from 'antd-mobile';
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';

const tabs = [
    { title: <Badge >视频</Badge> },
    { title: <Badge >文件资料</Badge> },
];
export default class Wodeshoucang extends Component {
    render() {
        return (
            <div style={{width:'100%',height:'100%',overflowY:'hidden',backgroundColor:'#fafaf8'}}>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >我的收藏</NavBar>
                <Tabs tabs={tabs}>
                    <div style={{overflow:'scroll',height:'100%'}}>
                        <div className='wodeshoucangdiv'>
                            <p style={{fontSize:'15px',color:'black'}}>收藏视频一</p>
                            <img style={{width:'90%',height:'150px'}} src={require('../../img/11.jpg')}/>
                        </div>
                        <div className='wodeshoucangdiv'>
                            <p style={{fontSize:'15px',color:'black'}}>收藏视频二</p>
                            <img style={{width:'90%',height:'150px'}} src={require('../../img/11.jpg')}/>
                        </div>
                        
                    </div>
                    <div style={{textIndent:'2em',fontSize:'16px',overflow:'scroll',height:'100%', justifyContent: 'center',paddingTop:'10px'}}>
                        <div className='wodeshoucangdiv1'>
                            <p style={{fontSize:'15px',color:'black'}}>收藏资料一</p>
                            <p>生赐予我们的不只是鲜花和掌声，更多的是荆棘和痛苦。正在追逐目标的你失败了，倾家荡产了。不要沮丧，不要绝望，因为，人不可能一无所有。你的信念，你梦寐以求的辉煌，仍然深藏在你的心底。希望之光在呼唤：来吧，坚强的追梦者!擦干你的泪，抬起你的头，勇敢地面对挫折，用智慧选择方向，用行动重新扬起奋斗的帆，顺不骄，逆不惧，乘风破浪直奔成功的彼岸。</p>

                        </div>
                    </div>
                </Tabs>
            </div>
        )
    }
}
