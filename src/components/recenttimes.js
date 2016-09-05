import React, { Component } from 'react';
import { Link } from 'react-router';
import { recentFetch } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RECENT_Times extends Component{
  componentWillMount(){
    this.props.recentFetch();
  }

  render(){
    return (
      <div>
        <Link to="/" className="btn btn-warning pull-xs-right">Back to top scores</Link>
        <h3>Recent high scores</h3>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ recentFetch }, dispatch);
}

export default connect(null, mapDispatchToProps)(RECENT_Times);
