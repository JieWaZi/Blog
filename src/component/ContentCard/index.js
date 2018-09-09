import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Card,Button,Icon,Tag } from 'antd';
import {withRouter} from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import _ from 'lodash'

class ContentCard extends Component {

  state = {
    loading: true,
  }

  handleClick = () => {
    this.props.history.push("/article/"+this.props.article.filePath)
  }

  replaceText =(str) => {
    return str.replace(new RegExp("<br/>","g"),'\n')
  }

  renderTitle = (title,tag) => {
    const tags=[]
    _.forEach(tag.split(','),(value)=>{
      tags.push(<Tag key={value} color="gold">{value}</Tag>)
    })
    return (
      <div>
        {title}
        <div>{tags}</div>
      </div>
    )
  }

    render(){


        return (
            <div className='content-cards'>
            <Card 
              loading={this.props.loading}
              title={this.renderTitle(this.props.article.title,this.props.article.tag)}
            >
              <ReactMarkdown className="abstract" source={this.replaceText(this.props.article.abstract)}/>
            </Card>
            <li>
                {this.props.article.createdAt.substring(0,10)}
            </li>
              <li><Icon type='eye-o' style={{ marginRight: 8 }} />
                {this.props.article.readCount===undefined?0:this.props.article.readCount}
              </li>
              <li><Icon type='like-o' style={{ marginRight: 8 }} />
                {this.props.article.favouriteCount===undefined?0:this.props.article.favouriteCount}
              </li>
              <li><Icon type='message' style={{ marginRight: 8 }} />
                {this.props.article.commentCount===undefined?0:this.props.article.commentCount}
              </li>
            <Button type="dashed" type="danger" onClick={this.handleClick}>阅读全文</Button>
            </div>
          );
        }
}
export default connect((state)=>{
    return state;
})(withRouter(ContentCard))