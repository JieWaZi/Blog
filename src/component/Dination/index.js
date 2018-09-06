import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Animate from 'rc-animate';
import {Button,Avatar} from 'antd'

class Dination extends Component {

state = {
    show: false,
    text:'打赏'
  };

clickHandler = () => {
    this.setState({
      show: !this.state.show,
      text: this.state.show ? '打赏':'稍后打赏',
    });
  }

  render(){
    return (
      <div>
        <div className='donationButton'>
          <Button type="primary" shape="circle" onClick={this.clickHandler}>
            {this.state.text}
          </Button>
          </div>
          <div className='qrcode'>
            <Animate
              transitionAppear
              transitionName="fade"
            >
              {this.state.show ? <Avatar shape="square" size={150} src="/src/resource/image/qrcode.jpg"/> : null}
            </Animate>
          </div>
      </div>
    );
  }
}

export default connect((state)=>{
    return state;
})(Dination)