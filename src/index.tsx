import * as React from 'react'
import * as ReactDom from 'react-dom'
import styles from './index.css'
import data from './data.json'

import MyComponent from './MyComponent'

ReactDom.render(
  <h1 className={styles.red}>
    {data.title}
    <MyComponent />
  </ h1>,
  document.getElementById('app')
)
