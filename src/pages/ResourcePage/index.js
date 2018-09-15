import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Row, Col, Card } from 'antd';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';

const { Meta } = Card;

class ResourcePage extends Component {

    renderResourceCard = () => {
        const listData = [];
        for(let i=0;i<15;i++) {
            listData.push(
                <Col span={6} key={i}>
                    <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" style={{height:150}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                        />
                    </Card>
                </Col>
            );
        }
        return listData
    }

    render(){   
        return(
                <Row>
                    <Col xs={{span:20,offset:2}}>
                        <div className="resourcePage">
                            <Row>
                            {this.renderResourceCard()}
                            </Row>
                        </div>
                    </Col>
                </Row>
        )
    }
}

export default connect((state)=>{
    return state;
})(withRouter(ResourcePage))