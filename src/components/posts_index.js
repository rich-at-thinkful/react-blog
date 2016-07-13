import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentWillMount () {
        // called the first time component is rendered; not subsequent times
        console.log('good time to call action creator');
        this.props.fetchPosts();
    }
    
    render() {
        return(
            <div>List of Blog Posts</div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);