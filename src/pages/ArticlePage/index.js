import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PersonInformation from '../../component/PersonInformation/index'
import {Row,Col} from 'antd'
import { Markdown } from 'react-markdown-reader';
import 'highlight.js/styles/androidstudio.css'
import * as hljs from 'highlight.js/lib/highlight'

class ArticlePage extends Component {

    componentDidMount(){
        hljs.initHighlightingOnLoad()
    }

    render(){   
        return(
            <Row>
            <Col xs={24} sm={24} md={24} lg={{span:15,offset:2}} xl={{span:15,offset:2}}>
                <div className='markdown'>
                    <Markdown>
                        {require('./README.md')}
                    </Markdown>
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
})(ArticlePage)