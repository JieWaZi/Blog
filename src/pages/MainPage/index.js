import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd'

class MainPage extends Component {
    constructor(props){
        super()
        console.log(props)
    }

    render(){
        return(
            <div>
                <h1>啊哈哈哈</h1>
                <h2>啊哈哈哈</h2>
                <Button>你好</Button>
            </div>    
        )
    }
}
export default connect((state)=>{
    return state;
})(MainPage)