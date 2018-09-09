import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PersonInformation from '../../component/PersonInformation/index'
import * as actions from '../../actions/articleAction';
import { List, Avatar, Icon,Row,Col,Tag } from 'antd';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

const IconText = ({ type, text }) => (
        <span>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
        </span>
    );

class ListArticlePage extends Component {

    state = {
        index:0,
        size:7
    }

    componentDidMount(){
        this.props.dispatch(actions.listArticles({pageIndex:this.state.index,pageSize:this.state.size}))
    }

    replaceText =(str) => {
        return str.replace(new RegExp("<br/>","g"),'\n')
    }

    renderList = (records) => {
        const listData = [];
        _.forEach(records,(value) =>{
            const tags=[]
            _.forEach(value.tag.split(','),(value)=>{
                tags.push(<Tag key={value} color="gold">{value}</Tag>)
              })
            listData.push({
                click: ()=>{this.props.history.push("/article/"+value.filePath)},
                title: value.title,
                coverImg: "/src/resource/image/"+(value.coverImg===undefined?'default.jpg':value.coverImg),
                tags: tags,
                content: <ReactMarkdown className="abstract" source={this.replaceText(value.abstract)}/>,
                date:  value.createdAt,
                readCount: value.readCount===undefined ? 0 : value.readCount,
                favCount: value.favouriteCount===undefined ? 0 : value.favouriteCount,
                commentCount: value.commentCount===undefined ? 0 : value.commentCount
                });
        })
        return listData
    }

    render(){   
        return(
        <Row  >
            <Col className='list' xs={24} sm={24} md={24} lg={{span:15,offset:2}} xl={{span:15,offset:2}}>
                <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 7,
                }}
                dataSource={this.renderList(this.props.articleReducer.articles)}
                renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[<IconText type="eye-o" text={item.readCount} />, <IconText type="like-o" text={item.favCount} />, <IconText type="message" text={item.commentCount} />,item.date.substring(0,10)]}
                    extra={<img width={272} alt="coverImg" onClick={item.click} src={item.coverImg} />}
                >
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar}  />}
                    title={<a onClick={item.click}>{item.title}</a>}
                    description={item.tags}
                    />
                    {item.content}
                </List.Item>
                )}
            />
            </Col>
            <Col xs={0} sm={0} md={0} lg={{ span: 4, offset: 1}} xl={{ span: 4, offset: 1}}>
                <PersonInformation/>
            </Col>
        </Row> 
        )
    }
}

export default connect((state)=>{
    return state;
})(withRouter(ListArticlePage))