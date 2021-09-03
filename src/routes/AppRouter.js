import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { HeroScreen } from '../components/heros/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path='/auth'
            component={AuthRouter}
          />
          <Route
            path='/'
            component={HeroScreen}
            exact
          />
          <Route
            path='/search'
            component={SearchScreen}
            exact
          />

          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  )
}
