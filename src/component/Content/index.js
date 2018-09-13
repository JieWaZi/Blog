import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContentCard from '../../component/ContentCard/index';
import { Parallax } from 'rc-scroll-anim';
import * as actions from '../../actions/articleAction'


class Content extends Component {

  componentDidMount(){
    this.props.dispatch(actions.listArticles({pageIndex:0,pageSize:4}))
  }

  renderContentCard = (records) => {
    const cards = []
    let index = 0
    _.forEach(records,function(record){
      cards.push(
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0,0.5] }}
          style={{ transform: 'translateX(-100px)', opacity: 0 }}
          className="code-box-shape"
          key={index}
        >
          <div className='content-card'>
            <ContentCard article={record} loading={false} />
          </div>
          <div className='divider' />
        </Parallax>
      )
      index++
    })
    return cards
  }
  
  render(){
    console.log(this.props.articleReducer.articles)
    return (
      <div>
        {this.renderContentCard(this.props.articleReducer.articles)}
      </div>
    );
  }
}

export default connect((state)=>{
    return state;
})(Content)