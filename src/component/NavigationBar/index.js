import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Menu} from 'antd';
import { Link } from 'react-router-dom'

class NavigationBar extends Component {

  componentDidMount(){
    console.log(this.props.match)
  }
  
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
              <Menu.Item key="listArticle" className='item'>
                <Link to='/listArticle'>技术</Link>
              </Menu.Item>
              <Menu.Item key="resource" className='item'>
                <Link to='/resource'>资源</Link>
              </Menu.Item>
              <Menu.Item key="other" className='item'>
                <Link to='/other'>其他</Link>
              </Menu.Item>
            </Menu>
          );
        }
}
export default connect((state)=>{
    return state;
})(NavigationBar)