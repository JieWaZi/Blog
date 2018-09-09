import './index.less';

import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Row, Col,Card,Tag } from 'antd';
import ReactEcharts from 'echarts-for-react';
import * as actions from '../../actions/weatherAction';
import _ from 'lodash'
const { Meta } = Card;

class Weather extends Component {

    componentDidMount(){
        this.props.dispatch(actions.fetchWeather())
    }

    renderWeatherLinear = (record) =>{
    return  {
        title: {
            text: record.cityName,
            subtext: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['最高气温','最低气温']
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {type: ['line', 'bar']},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: record.week,
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            },
            min: _.min(record.minTemperature)-4,
            max: _.max(record.maxTemperature)+4
        },
        series: [
            {
                name:'最高气温',
                type:'line',
                data:record.maxTemperature,
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'最低气温',
                type:'line',
                data:record.minTemperature,
                markPoint: {
                    data: [
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
        };  
    }

    renderReport = (records) => {
        const cards = []
        let index = 0
        let cover = {}
        let image = ''
        _.forEach(records, function(record) {
            image ='/src/resource/weatherIcons/weather_'+record.img+'.png'
            if(index===0){
                cover = <img style={{height: '143px'}} src={image}/>
            }else{
                cover = <img src={image}/>
            }
            cards.push(
                <Card 
                cover= {cover}
                style={{height:'265px',background: '#f0f2f5'}}>
                    <Meta
                    title={record.date.substring(5)}
                    description={
                        <div>
                            <p>{record.weather}</p>
                            <Tag color="cyan" style={{marginTop: '0px'}}>
                                {record.minTemperature}~{record.maxTemperature}°C
                            </Tag>
                            <p style={{marginTop: '8px'}}>紫外线强度指数:{record.img > 4 ? '弱' :'强'}</p> 
                        </div>
                    }
                    />
                </Card>
            )
            index++
        });
        const newCard =[]
        index=0
        _.forEach(cards,function(card){
            if (index===0){
                newCard.push(<Col key={index} xs={6} xl={6}>{card}</Col>)
            }else{
                newCard.push(<Col key={index} xs={3} xl={3}>{card}</Col>)
            }
            index++;
        })
        return (
            <div className='report'>
                <OverPack playScale={0.2} >
                    <QueueAnim key="queue" leaveReverse>
                        {newCard}
                    </QueueAnim>
                </OverPack>
            </div>
        )
    }

      render(){
        return (
            <div className='chart'>
                <Row type="flex" justify="space-around">
                    <Col xs={24} sm={24} md={7} xl={7}><ReactEcharts option={this.renderWeatherLinear(this.props.weatherReducer.weather)} /></Col>
                    <Col xs={24} sm={24} md={13} xl={13}>{this.renderReport(this.props.weatherReducer.weather.dayWeather)}</Col>
                </Row>
            </div>
        )
    }
}

export default connect((state)=>{
    return state;
})(Weather)