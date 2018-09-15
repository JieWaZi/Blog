import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Layout,Row,Col,BackTop } from 'antd';
import NavigationBar from '../../component/NavigationBar/index'
import IndexPage from '../IndexPage/index'
import ArticlePage from '../ArticlePage/index'
import ListArticlePage from '../ListArticlePage/index'
import ResourcePage from '../ResourcePage/index'
import Slide from '../../component/Slide/index'
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import BlogFooter from '../../component/Footer'

const { Footer } = Layout

class CommonLayout extends Component {

    static contextTypes = {
        router: PropTypes.object
      }
      
    constructor(props, context) {
         super(props, context);
      }

    render(){
        return(
            <Layout className='common-layout'>
                <Slide/>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={{span:20,offset:2}} xl={{span:20,offset:2}}>
                        <NavigationBar/>
                    </Col>
                </Row>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/article/:article" component={ArticlePage}/>
                <Route exact path="/listArticle" component={ListArticlePage}/>
                <Route exact path="/resource" component={ResourcePage}/>
                <BlogFooter className='footer'/>
                <BackTop />
            </Layout>

        )
    }
}
export default connect((state)=>{
    return state;
})(CommonLayout)