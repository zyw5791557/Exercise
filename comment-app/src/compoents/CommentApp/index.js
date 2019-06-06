import React, { Component } from 'react';
import CommentInput from '../CommentInput/';
import CommentList from '../CommentList/';
import cloneDeep from 'lodash/cloneDeep';
import './index.css';

class CommentApp extends Component {
    constructor () {
        super();
        this.state = {
            cacheUser: '',
            commentList: []
        }
    }
    componentWillMount () {
        /* 数据持久化 */
        const cacheUser = localStorage.getItem('username') || '';
        const commentList = JSON.parse(localStorage.getItem('commmentList')) || [];
        this.setState({
            cacheUser,
            commentList
        })
    }
    sendHandle (comment) {
        const arr = this.state.commentList.concat([comment]);
        this.setCommentList(arr);
        this.setState({
            commentList: arr
        })
    }
    setCommentList (arr) {
        /* 数据持久化 */
        localStorage.setItem('commmentList', JSON.stringify(arr))
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
        this.setCommentList(arr)
    }
    render () {
        return (
            <div className="comment-app">
                <CommentInput user={ this.state.cacheUser } onSend={ this.sendHandle.bind(this) } />
                <CommentList onDel={ this.onDel.bind(this) } commentData={ this.state.commentList } />
            </div>
        )
    }
}

export default CommentApp;