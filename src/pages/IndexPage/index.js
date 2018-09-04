import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row,Col,Divider,Icon} from 'antd'
import PersonInformation from '../../component/PersonInformation/index'
import ArticleContent from '../../component/Content/index'
import ProjectCard from '../../component/ProjectCard/index'
import Weather from '../../component/Statistics/index'

class IndexPage extends Component {

    render(){
        return(
            <Row>
                <Col xs={24} sm={24} md={24} lg={{span:15,offset:2}} xl={{span:15,offset:2}}>
                    <ArticleContent/>
                </Col>
                <Col xs={0} sm={0} md={0} lg={{ span: 4, offset: 1}} xl={{ span: 4, offset: 1}}>
                    <PersonInformation/>
                </Col>
                <Divider style={{fontSize:'30px',paddingTop: '40px'}}><Icon type="github" /> GitHub</Divider>
                <Col xs={{span:22,offset:1}} style={{marginTop: '15px'}}>
                    <ProjectCard/>
                </Col>
                <Divider style={{fontSize:'30px',paddingTop: '60px'}}><Icon type="area-chart" /> Statistics</Divider>
                <Weather/>
            </Row>  
        )
    }
}
export default connect((state)=>{
    return state;
})(IndexPage)