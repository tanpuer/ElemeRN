/**
 * Created by eengoo on 17/3/14.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newsCreators from '../actions/news';
import News from '../page/News';


class NewsContainer extends Component{
    render(){
        return(
            <News {...this.props}/>
        );
    }
}

const mapStateToProps = (state)=> {
    const {news} = state;
    return {
        news
    };
};

const mapDispatchToProps = (dispatch)=> {
    const newsActions = bindActionCreators(newsCreators, dispatch);
    return {
        newsActions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);