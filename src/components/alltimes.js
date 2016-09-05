import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { alltimeFetch } from '../actions/index';

class ALL_Times extends Component{
  componentWillMount(){
    this.props.alltimeFetch();
  }

  renderPosts(){
    return this.props.posts.map((el, index) => {
      return (
        <li className="list-group-item" key={ index }>
          <img src={ el.img } />
          <strong>{ el.username }</strong>
          <span className="pull-xs-right">{ el.alltime }</span>
        </li>
      )
    })
  }

  render(){
    return (
      <div>
      <Link to="/recent" className="btn btn-primary pull-xs-right">See recent top scores</Link>
        <h2>All time point holders</h2>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ alltimeFetch }, dispatch);
}

function mapStateToProps(state){
  return { posts: state.posts.Apost }
}

export default connect(mapStateToProps, mapDispatchToProps)(ALL_Times);
