import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PersonInformation from '../../component/PersonInformation/index'
import * as actions from '../../actions/articleAction';
import { List, Avatar, Icon,Row,Col } from 'antd';


const listData = [];
    for (let i = 0; i < 23; i++) {
    listData.push({
        href: '/article',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
    }

const IconText = ({ type, text }) => (
        <span>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
        </span>
    );

class ListArticlePage extends Component {

    componentDidMount(){
        this.props.dispatch(actions.getArticle())
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
                pageSize: 8,
                }}
                dataSource={listData}
                renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
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
})(ListArticlePage)