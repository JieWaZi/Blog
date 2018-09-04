import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Menu} from 'antd';
import { Link } from 'react-router-dom'

class NavigationBar extends Component {
  state = {
    current: 'index',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

    render(){
        return (
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode='horizontal'
              className='menu'
            >
              <Menu.Item key="index" className='item'>
              <Link to='/'>首页</Link>
              </Menu.Item>
              <Menu.Item key="app" className='item'>
                <Link to='/article'>技术</Link>
              </Menu.Item>
              <Menu.Item key="setting" className='item'>
                资源
              </Menu.Item>
              <Menu.Item key="all" className='item'>
                其他
              </Menu.Item>
            </Menu>
          );
        }
}
export default connect((state)=>{
    return state;
})(NavigationBar)