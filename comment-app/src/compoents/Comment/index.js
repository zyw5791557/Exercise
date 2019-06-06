import React, { Component } from 'react';
import { formatCommentTime } from '../../utils/format-time';
import './index.css';

class Comment extends Component {
    static timer = null
    constructor () {
        super();
        this.state = {
            isShowDel: 'none',
            _formatContent: '',
            _formatTime: ''
        }
    }
    componentWillMount () {
        this.formatString();
        this.realTime()
    }
    componentWillUnmount () {
        window.clearInterval(this.timer)
    }
    /* 格式化评论 */
    formatString () {
        const { info } = this.props;
        let content = info.content;
        content = content
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;")
                    .replace(/`([\S\s]+?)`/g, "<code>$1</code>")
        this.setState({
            _formatContent: content
        })
    }
    /* 五秒自动刷一次时间戳 */
    realTime () {
        const { info } = this.props;
        this.setState({
            _formatTime: formatCommentTime(info.createdtime)
        })
        this.timer = window.setInterval(() => {
            this.setState({
                _formatTime: formatCommentTime(info.createdtime)
            })
        }, 5000);
    }
    mouseOverHandle () {
        this.setState({
            isShowDel: 'block'
        })
    }
    mouseLeaveHandle () {
        this.setState({
            isShowDel: 'none'
        })
    }
    delHandle () {
        const { info } = this.props;
        this.props.onDel(info.id)
    }
    render () {
        const { info } = this.props;
        return (
            <div 
                className="comment" 
                onMouseOver={ this.mouseOverHandle.bind(this) }
                onMouseLeave={ this.mouseLeaveHandle.bind(this) } >
                <div className="comment-user">{ info.username }:</div>
                <p 
                    className="comment-content"
                    dangerouslySetInnerHTML={ { __html: this.state._formatContent } }></p>
                <span className="comment-createdtime">{ this.state._formatTime }</span>
                <span 
                    className="comment-delete" 
                    style={ { display: this.state.isShowDel } }
                    onClick={ this.delHandle.bind(this) } >删除</span>
            </div>
        )
    }
}

export default Comment;