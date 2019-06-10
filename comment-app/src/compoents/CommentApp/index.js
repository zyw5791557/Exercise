import React, { Component } from 'react';
import CommentInput from '../CommentInput/';
import CommentList from '../CommentList/';
import cloneDeep from 'lodash/cloneDeep';
import './index.css';

// higher order component
import wrapWithLoadData from '../../higher/wrapWithLoadData'

class CommentApp extends Component {
    componentWillMount () {
        const commentList = this.props.data || [];
        this.setState({ commentList })
    }
    sendHandle (comment) {
        const arr = this.state.commentList.concat([comment]);
        this.props.saveData(arr);
        this.setState({
            commentList: arr
        })
    }
    onDel (id) {
        const arr = cloneDeep(this.state.commentList);
        arr.forEach((ele, i) => {
            if (ele.id === id) {
                arr.splice(i, 1)
            }
        })
        this.setState({
            commentList: arr
        })
        this.props.saveData(arr);
    }
    render () {
        return (
            <div className="comment-app">
                <CommentInput onSend={ this.sendHandle.bind(this) } />
                <CommentList onDel={ this.onDel.bind(this) } commentData={ this.state.commentList } />
            </div>
        )
    }
}

CommentApp = wrapWithLoadData(CommentApp, 'commentList')

export default CommentApp;