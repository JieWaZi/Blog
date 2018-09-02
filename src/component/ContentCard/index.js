import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Card,Button,Icon } from 'antd';


class ContentCard extends Component {
  state = {
    loading: true,
  }

  handleClick = () => {
    this.setState({ loading: !this.state.loading });
  }
    render(){
        return (
            <div className='content-cards'>
            <Card loading={this.state.loading} title="Card title">
              Whatever content
            </Card>
              <li><Icon type='star-o' style={{ marginRight: 8 }} />156</li>
              <li><Icon type='like-o' style={{ marginRight: 8 }} />156</li>
              <li><Icon type='message' style={{ marginRight: 8 }} />156</li>
            <Button type="dashed" type="danger" onClick={this.handleClick}>阅读全文</Button>
            </div>
          );
        }
}
export default connect((state)=>{
    return state;
})(ContentCard)