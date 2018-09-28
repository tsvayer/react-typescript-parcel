import React from 'react'
import styles from './App.css'
import data from './data.json'

import MyComponent from './MyComponent'

export default class App extends React.Component {
  render() {
    return (
      <h1 className={styles.red}>
        {data.title}
        <MyComponent />
      </h1>
    )
  }
}
