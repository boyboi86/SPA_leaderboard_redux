import React, { Component } from 'react';
import { Link } from 'react-router';
import { recentFetch } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RECENT_Times extends Component{
  componentWillMount(){
    this.props.recentFetch();
  }

  renderPosts(){
    return this.props.posts.map((el, index) => {
      return(
        <li className="list-group-item" key={ index }>
          <img src={ el.img }/>
          <strong>{ el.username }</strong>
          <span className="pull-xs-right">{ el.recent }</span>
        </li>
      )
    })
  }

  render(){
    return (
      <div>
        <Link to="/" className="btn btn-warning pull-xs-right">Back to top scores</Link>
        <h3>Recent high scores</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ recentFetch }, dispatch);
}

function mapStateToProps(state){
  return { posts: state.posts.Rpost }
}

export default connect(mapStateToProps, mapDispatchToProps)(RECENT_Times);
