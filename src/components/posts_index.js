import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentWillMount () {
        // called the first time component is rendered; not subsequent times
        this.props.fetchPosts();
    }
    
    render() {
        return(
            <div>List of Blog Posts</div>
        );
    }
}

// shorthand removes mapPropsToDispatch
export default connect(null, { fetchPosts })(PostsIndex);
