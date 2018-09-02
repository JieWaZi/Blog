import './index.less';
import 'rc-banner-anim/assets/index.css';

import BannerAnim from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
const { Element } = BannerAnim;
const BgElement = Element.BgElement;
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Title extends Component {
    constructor() {
        super(...arguments);
        this.imgArray = [
          '/src/resource/image/title1.jpg',
          '/src/resource/image/title2.jpg',
        ];
    }
    
      render(){
        return (
          <BannerAnim prefixCls="banner-user" autoPlay>
            <Element 
              prefixCls="banner-user-elem"
              key="0"
            >
              <BgElement
                key="bg"
                className="bg"
                style={{
                    backgroundImage: `url(${this.imgArray[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
              />
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                Weclome To My Home 
              </TweenOne>
              <TweenOne className="banner-user-text" 
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
                There Are Some Technology Blogs And Projects.I Hope That Can Help You！
              </TweenOne>
            </Element>
            <Element 
              prefixCls="banner-user-elem"
              key="1" 
            >
              <BgElement
                key="bg"
                className="bg"
                style={{
                    backgroundImage: `url(${this.imgArray[1]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
              />
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                Weclome To My Home 
              </TweenOne>
              <TweenOne className="banner-user-text" 
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
                There Are Some Technology Blogs And Projects.I Hope That Can Help You！
              </TweenOne>
            </Element>
          </BannerAnim>);
      }
    }
export default connect((state)=>{
    return state;
})(Title)