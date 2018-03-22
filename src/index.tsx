import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <App txt="Not a default!"/>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()

if (module.hot) {
  module.hot.accept()
}
