import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header';
import useTranslation from '../hooks/useTranslation'
const Main = lazy(() => import('../containers/Main'))
const Settings = lazy(() => import("../containers/Settings"));

const AppLayout = () => {
  return (
    <Router>
      <Header title={useTranslation('TITLE')}/>
      <Suspense fallback={<div>{useTranslation('LOADING')}</div>}>
        <Switch>
          <div className="container">
            <Route path="/" exact>
              <Main/>
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </div>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default AppLayout;
