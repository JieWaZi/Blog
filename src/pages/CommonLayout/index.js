import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Layout,Row,Col,Divider,Icon,BackTop } from 'antd';
import HorizontalSider from '../../component/HorizontalSider/index'
import PersonInformation from '../../component/PersonInformation/index'
import ArticleContent from '../../component/Content/index'
import ProjectCard from '../../component/ProjectCard/index'
import Weather from '../../component/Statistics/index'
import Title from '../../component/Title/index'
import {Route} from 'react-router-dom';
import ArticlePage from '../ArticlePage';
const { Footer } = Layout

class CommonLayout extends Component {

    render(){
        return(
                <Layout className='common-layout'>
                    <Title/>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={{span:15,offset:3}} xl={{span:15,offset:3}}>
                            <HorizontalSider/>
                            <Route exact path="/" component={ArticleContent} />
                            <Route exact path="/article" component={ArticlePage} />
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={{ span: 4, offset: 1}} xl={{ span: 4, offset: 1}}>
                            <PersonInformation/>
                        </Col>
                        <Divider style={{fontSize:'30px',paddingTop: '30px'}}><Icon type="github" /> GitHub</Divider>
                        <Col xs={24}>
                            <ProjectCard/>
                        </Col>
                        <Divider style={{fontSize:'30px',paddingTop: '30px'}}><Icon type="area-chart" /> Statistics</Divider>
                        <Route exact path="/" component={Weather} />
                        <Col xs={24}>
                            <Footer className='footer'/>
                        </Col>
                    </Row>
                    <BackTop />
            </Layout>
        )
    }
}
export default connect((state)=>{
    return state;
})(CommonLayout)