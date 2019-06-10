import React, { Component } from 'react'

const wrapWithLoadData = (WrappedComponent, localDataName) => {
    return class extends Component {
        componentWillMount () {
            this._getLocalData()
        }
        _getLocalData () {
            const data = localStorage.getItem(localDataName)
            try {
                this.setState({ data: JSON.parse(data) })
            } catch (err) {
                this.setState({ data })
            }
        }
        _postLocalData (data) {
            try {
                localStorage.setItem(localDataName, JSON.stringify(data))
            } catch (err) {
                localStorage.setItem(localDataName, `${ data }`)
            }
        }
        render () {
            const props = {
                data: this.state.data,
                saveData: this._postLocalData.bind(this),
                ...this.props   // 这里的意思是把剩余的参数原封不动的传递给被包装的组件
            }
            return (
                <WrappedComponent { ...props } />
            )
        }
    }
}

export default wrapWithLoadData