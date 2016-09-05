import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { alltimeFetch } from '../actions/index';

class ALL_Times extends Component{
  componentWillMount(){
    this.props.alltimeFetch();
  }

  render(){
    return this.props.posts.map((el, index) => {
      return (
        <div>{el.username}</div>
      )
    })
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ alltimeFetch }, dispatch);
}

function mapStateToProps(state){
  return { posts: state.posts.post }
}

export default connect(mapStateToProps, mapDispatchToProps)(ALL_Times);
