/* global __DEV */
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import HomePage from './HomePage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    {__DEV &&
      <Route path='/kitchensink' component={require('./KitchensinkPage')} />}
  </Route>
)

