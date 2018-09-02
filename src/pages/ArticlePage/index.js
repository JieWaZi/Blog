import './index.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown'

class ArticlePage extends Component {
    constructor(props){
        super()
        console.log(props)
    }

    render(){
       const input = '# This is a header\n\nAnd this is a paragraph'
        return(
            <ReactMarkdown source={input}/>
        )
    }
}
export default connect((state)=>{
    return state;
})(ArticlePage)