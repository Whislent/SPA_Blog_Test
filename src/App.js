import React, { Component } from 'react'
import { articles } from './fixtures'
import ArticleList from './containers/ArticleList'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <ArticleList data = {articles}/>
      </div>
    )
  }
}

export default App
