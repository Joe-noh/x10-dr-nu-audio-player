/* global __DEV */

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import PlaylistPage from './components/PlaylistPage'
import CategoriesPage from './components/CategoriesPage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={PlaylistPage} />
    <Route path='/player' component={CategoriesPage} />
    <Route path='/categories' component={CategoriesPage} />
    {__DEV &&
      <Route
        path='/kitchensink'
        component={require('./components/KitchensinkPage')}
      />
    }
  </Route>
)

