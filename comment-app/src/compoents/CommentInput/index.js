import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class CommentInput extends Component {
    static defaultProps = {
        user: ''
    }
    static propTypes = {
        user: PropTypes.string
    }
    constructor () {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    changeUsername (e) {
        const val = e.target.value;
        /* 数据持久化 */
        localStorage.setItem('username', val)
        this.setState({
            username: val
        })
    }
    changeContent (e) {
        let val = e.target.value;
        this.setState({
            content: val
        })
    }
    submit () {
        if (this.props.onSend) {
            const { username, content } = this.state;
            const nowTime = Date.now();
            if (username && content) {
                this.props.onSend({ id: nowTime, username, content, createdtime: nowTime })
            } else {
                if (!username) {
                    alert('请填写用户名')
                } else if (!content) {
                    alert('请填写评论')
                }
            }
        }
        this.setState({
            content: ''
        })
    }
    componentWillMount () {
        this.setState({
            username: this.props.user
        })
    }
    componentDidMount () {
        /* DOM渲染完自动聚焦到评论框 */
        this.comment.focus()
    }
    render () {
        return (
            <div className="comment-input">
                <div className="username item">
                    <label>
                        <span>用户名：</span>
                        <input 
                            type="text" 
                            value={ this.state.username } 
                            onChange={ this.changeUsername.bind(this) }/>
                    </label>
                </div>
                <div className="des item">
                    <label>
                        <span>评论内容：</span>
                        <textarea 
                            ref={ e => this.comment = e } 
                            value={ this.state.content } 
                            onKeyDown={ e => { if(e.keyCode === 13) this.submit() } }
                            onChange={ this.changeContent.bind(this) }></textarea>
                    </label>
                </div>
                <div className="send-box">
                    <button onClick={ this.submit.bind(this) }>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;