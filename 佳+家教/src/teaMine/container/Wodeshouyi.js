import React, { Component } from 'react'
import { Tabs, Badge } from 'antd-mobile';
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';

const tabs = [
    { title: <Badge >我的视频</Badge> },
    { title: <Badge >收益情况</Badge> },
];
export default class Wodeshouyi extends Component {
    render() {
        return (
            <div style={{width:'100%',height:'100%',overflowY:'hidden'}}>
                <NavBar
                style={{backgroundColor:'white',color:'black'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >我的收益</NavBar>
                <Tabs tabs={tabs}>
                    <div style={{overflow:'scroll',height:'100%'}}>
                        <div className='wodeshoucangdiv'>
                            <p style={{fontSize:'15px',color:'black'}}>我的视频一</p>
                            <img style={{width:'90%',height:'150px'}} src={require('../../img/11.jpg')}/>
                            <p>price:￥25</p>
                        </div>
                        <div className='wodeshoucangdiv'>
                            <p style={{fontSize:'15px',color:'black'}}>我的视频二</p>
                            <img style={{width:'90%',height:'150px'}} src={require('../../img/11.jpg')}/>
                            <p>price:￥36</p>
                        </div>
                        
                    </div>
                    <div style={{textIndent:'2em',fontSize:'16px',overflow:'scroll',height:'100%', justifyContent: 'center',paddingTop:'10px'}}>
                        <div className='wodeshoucangdiv1'>
                            <p style={{fontSize:'15px',color:'black'}}>收益情况</p>
                            <p>￥25</p>
                            

                        </div>
                    </div>
                </Tabs>
            </div>
        )
    }
}
