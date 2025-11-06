import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './fonts.css'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

const warn = window.console.warn
window.console.warn = message => {
  if (/Automatically scrolling/.test(message)) {
    return
  }
  warn(message)
}
