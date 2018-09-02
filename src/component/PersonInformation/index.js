import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Avatar,Divider,Tag,Icon } from 'antd';
import Texty from 'rc-texty';


class PersonInformation extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

    render(){
        return (
            <div className='box'>
              <span className='name'>
                <Texty mode='smooth' interval={100}>Ryan Wu</Texty>
              </span>
              <Avatar size={100} src="/src/resource/image/avar.png" />
              <Divider className='gete'>个人简介</Divider>
              <div className='summary'>
                <Tag color="magenta" style={{marginBottom:'6px'}}>Java</Tag>
                <Tag color="red">Go</Tag>
                <Tag color="volcano">React</Tag>
                <Tag color="orange">Docker</Tag>
                <Tag color="blue">Spark</Tag>
                <Tag color="geekblue">待学...</Tag>
                <div className='introduce'>
                  如果你不满意你的现状，要么开始改变，要么就闭嘴
                </div>
                <div className='icon'>
                  <a href='https://github.com/JieWaZi' target='_blank'><Icon type="github"/></a>
                  <a href='http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESC}}&pics={{IMAGE}}&summary={{SUMMARY}}' target='_blank'><Icon type="qq" /></a>
                  <a href='http://service.weibo.com/share/mobile.php?url={{URL}}&title={{DESC}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}' target='_blank'><Icon type="weibo" /></a>
                </div>
              </div>   
            </div>
          );
        }
}
export default connect((state)=>{
    return state;
})(PersonInformation)