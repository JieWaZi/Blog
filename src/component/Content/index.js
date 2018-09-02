import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContentCard from '../../component/ContentCard/index';
import { Parallax } from 'rc-scroll-anim';

class Content extends Component {

  renderContentCard = () => {
    const cards = []
    for (var i=0;i<3;i++){
      cards.push(
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0,0.5] }}
          style={{ transform: 'translateX(-100px)', opacity: 0 }}
          className="code-box-shape"
          key={i}
        >
          <div className='content-card'>
            <ContentCard />
          </div>
          <div className='divider' />
        </Parallax>
      )
    }
    return cards
  }
  
  render(){
    return (
      <div>
        {this.renderContentCard()}
      </div>
    );
  }
}

export default connect((state)=>{
    return state;
})(Content)