import React, { Component } from 'react'
import Article from '../components/Article'
import { connect } from 'react-redux'
import { getId } from "../actions/ArticleAction"
import PropTypes from "prop-types"

import './ArticleList.css'

class ArticleList extends Component {
    render() {
        const articleElements = this.props.data.map(data => <li key={data.id}>
            <Article
                data = {data}
                visible = {data.id === this.props.article.id}
                handleVisible = {this.handleVisible(data.id)}
            />
        </li>)

        return (
            <React.Fragment>
                <ul className='Article'>{articleElements}</ul>
            </React.Fragment>
        )
    }

    handleVisible = visibleArticleId => e => {
        const { getId, article } = this.props
        visibleArticleId === article.id ? getId(null) : getId(visibleArticleId)
    }
}

const mapStateToProps = store => ({
    article: store.article,
})

const mapDispatchToProps = dispatch => ({
    getId: visibleArticleId => dispatch(getId(visibleArticleId)),
})

ArticleList.propTypes = {
    data: PropTypes.array.isRequired,
    article: PropTypes.object.isRequired,
    getId: PropTypes.func.isRequired,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ArticleList)