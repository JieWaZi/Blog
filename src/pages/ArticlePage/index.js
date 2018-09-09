import './index.less';
import 'highlight.js/styles/androidstudio.css'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dination from '../../component/Dination/index'
import PersonInformation from '../../component/PersonInformation/index'
import {Row,Col,Divider} from 'antd'
import { Markdown } from 'react-markdown-reader';
import * as actions from '../../actions/articleAction';
import {withRouter} from 'react-router-dom';


class ArticlePage extends Component {

    componentDidMount(){
        this.props.dispatch(actions.getArticle(this.props.match.params.article))
    }

    render(){   
        return(
            <Row>
            <Col xs={24} sm={24} md={24} lg={{span:15,offset:2}} xl={{span:15,offset:2}}>
                <div className='markdown'>
                    <Markdown>
                        {this.props.articleReducer.article}
                    </Markdown>
                    <Divider>END</Divider>
                    <Dination />
                </div>
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
})(withRouter(ArticlePage))