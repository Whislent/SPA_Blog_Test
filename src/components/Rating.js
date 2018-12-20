import React, {Component} from 'react'

import './Ratiing.css'

class Rating extends Component{
    state = {
        rating: [],
        avgRating: 0,
    }

    render() {
        return (
            <React.Fragment>
                {this.renderStars()} Рейтинг: {this.state.avgRating.toFixed(2)}
            </React.Fragment>
        )
    }

    renderStars() {
        const stars = [1, 2, 3, 4, 5]
        return stars.map((item, index) => {
            return (
                <a
                    key={index}
                    onClick={this.onClickStar(item)}
                    className="Rating"
                    title={item}
                >
                    ☆
                </a>
            )
        })
    }
    //Функция вычисления среднего значения рейтинга
    onClickStar = star => e => {
        const { rating } = this.state
        rating.push(star)
        return (
            this.setState ({
                avgRating: rating.reduce(function (sum, current) {
                    return sum + current
                })/rating.length
            })
        )
    }
}

export default Rating