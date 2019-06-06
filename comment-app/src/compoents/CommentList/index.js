import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/';

class CommentList extends Component {
    static defaultProps = {
        commentData: []
    }
    static propTypes = {
        commentData: PropTypes.array
    }
    render () {
        return (
            <div className="comment-list">
                {
                    this.props.commentData.map(ele => <Comment info={ ele } key={ ele.id } onDel={ this.props.onDel.bind(this) } />)
                }
            </div>
        )
    }
}

export default CommentList;