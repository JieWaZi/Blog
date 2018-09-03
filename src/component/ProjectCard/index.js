import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Card, Col, Row, Icon,Tag,Divider } from 'antd';
import * as actions from '../../actions/indexAction';
import _ from 'lodash';
import { Parallax } from 'rc-scroll-anim';

class ProjectCard extends Component {

  componentDidMount(){
    this.props.dispatch(actions.fetchGithub())
  }
 
  renderCard = () =>{
    const showProject=["grpc","Kafka-Cluster","PhotoMosaic","Blog"]
    const cards = []
    _.forEach(this.props.indexReducer.project, function(value) {
      if (_.includes(showProject,value.name)){
        const title = 
        <a href={value.clone_url} target='_black' style={{color:'#fa541c' }}>
          <Icon type="fork" style={{marginRight:"10px"}} />{value.name}
         </a>
        cards.push(
          <Col key={value.name} xs={24} sm={10} lg={5} xl={5} xxl={5} >
            <Parallax animation={{ scale: 1 }} style={{ transform: 'scale(0.3)' }}>
              < Card 
                hoverable
                title={title}
                bordered={true}
                headStyle={{textAlign:"center"}}
                bodyStyle={{minHeight:"146px",textAlign:"center"}}
                className='card'
                >
                <Tag className='watchTag'>
                  <Icon type="eye" />Watch: {value.watchers_count}
                </Tag>
                <Tag className='starTag'>
                  <Icon type="star" />Star: {value.stargazers_count}
                </Tag>
                <Divider style={{marginTop: '22px'}}>Description</Divider>
                {value.description}
              </Card>
            </Parallax>
          </Col>

        )
      }
    });

    return cards
  }

    render(){
        return (
        <div className='project-card'>
              <Row type="flex" justify="space-around">
                {this.renderCard()}
              </Row>
        </div>
          );
        }
}
export default connect((state)=>{
    return state;
})(ProjectCard)