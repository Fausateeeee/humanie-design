import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './AppRouter'
import { CookiesProvider } from 'react-cookie'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-social/bootstrap-social.css'
import 'font-awesome/css/font-awesome.min.css'
import './styles/humanieStyles.css'

ReactDOM.render(
  <CookiesProvider>
    <AppRouter />
  </CookiesProvider>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
