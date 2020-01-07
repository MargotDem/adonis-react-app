import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <section>
      <div className="logo"></div>
      <div className="title"></div>
      <div className="subtitle">
        <p>AdonisJs simplicity will make you feel confident about your code</p>
        <p>
          Don't know where to start? Read the <a href="https://adonisjs.com/docs">documentation</a>.
        </p>
      </div>
    </section>
    )
  }
}
