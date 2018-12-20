import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Comment.css'

class Comment extends Component{
    render() {
        const { comments } = this.props
         const commentList = comments.map(function (item) {
                return (
                    <div key={item.id} className="Comment">
                        <h4>{item.user}</h4>
                        <p>{item.text}</p>
                    </div>
                )
            })
        return (
            <div>
                {commentList}
            </div>
        )
    }
}

Comment.propTypes = {
    comments: PropTypes.array.isRequired,
}

export default Comment