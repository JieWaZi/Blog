import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Icon } from 'antd';

class BlogFooter extends Component {

  render(){
    return (
      <div className='footer'>
        <p><Icon type="copyright" theme="outlined" /> Design By Ryan Wu 个人博客 沪ICP备18012785号</p>
      </div>
    );
  }
}

export default connect((state)=>{
    return state;
})(BlogFooter)