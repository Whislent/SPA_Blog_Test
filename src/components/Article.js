import React, { Component } from 'react'
import Comment from './Comment'
import Rating from './Rating'
import PropTypes from 'prop-types'

import './Article.css'

class Article extends Component{
    render() {
        const { data, handleVisible ,visible } = this.props
        return (
            <div>
                <h3>
                    <a href='#' onClick={handleVisible} className='title'>{data.title}</a>
                </h3>
                <Rating/>
                {visible && this.getBody()}
            </div>
        )
    }
    //функция отображения содержимого статьи
    getBody() {
        const { data } = this.props
        console.log()
        return (
            <div>
                <p>
                    <img
                        className='img'
                        src={data.img}
                        align="bottom"
                        alt="Здесь должна быть картинка"
                    />
                </p>
                <section>{data.text}</section>
                <p className='Info'>
                    Автор: {data.user}. Дата: {data.date}
                </p>
                {data.comments ?
                    <div>Комментарев {data.comments.length}:
                        <Comment comments = {data.comments}/>
                    </div>
                    : <p>Комментариев нет</p>}
            </div>
        )
    }
}

Article.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        comments: PropTypes.array,
    }),
    handleVisible: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
}

export default Article