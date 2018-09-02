import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import echarts from 'echarts/lib/echarts';
import'echarts/lib/chart/line'          //引入折线图
import'echarts/lib/component/tooltip'   //图表提示框（按需）
import'echarts/lib/component/grid'      //图表网格（按需）
import * as actions from '../../actions/statisticsAction';
import { Row, Col } from 'antd';

class Weather extends Component {
    

  componentDidMount(){
  
  }

  componentDidUpdate(){
    this.renderWeatherLinear(this.refs.main)
    this.renderWeatherLinear(this.refs.main1)
  }

  renderWeatherLinear = (chart) =>{
    const myChart = echarts.init(chart);

    const option = {
      title: {
          text: '未来一周气温变化',
          subtext: '纯属虚构'
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
              dataZoom: {
                  yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
          }
      },
      xAxis:  {
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis: {
          type: 'value',
          axisLabel: {
              formatter: '{value} °C'
          }
      },
      series: [
          {
              name:'最高气温',
              type:'line',
              data:[11, 11, 15, 13, 12, 13, 10],
              markPoint: {
                  data: [
                      {type: 'max', name: '最大值'},
                      {type: 'min', name: '最小值'}
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
              data:[1, -2, 2, 5, 3, 2, 0],
              markPoint: {
                  data: [
                      {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                  ]
              },
              markLine: {
                  data: [
                      {type: 'average', name: '平均值'},
                      [{
                          symbol: 'none',
                          x: '90%',
                          yAxis: 'max'
                      }, {
                          symbol: 'circle',
                          label: {
                              normal: {
                                  position: 'start',
                                  formatter: '最大值'
                              }
                          },
                          type: 'max',
                          name: '最高点'
                      }]
                  ]
              }
          }
      ]
    };  

    myChart.setOption(option)
  }

      render(){
        return (
          <Row>
            <Col xs={24} sm={24} md={24} lg={{span:9,offset:2}} xl={{span:9,offset:2}} >
              <div ref='main' style={{height:'300px'}}>
              </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={{span:9,offset:2}} xl={{span:9,offset:2}} >
              <div ref='main1' style={{height:'300px'}}>
              </div>
          </Col>
          </Row>
        )
    }
}

export default connect((state)=>{
    return state;
})(Weather)