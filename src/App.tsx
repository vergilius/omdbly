import React from 'react';
import { ThemeProvider } from 'styled-components'
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

import {Layout} from './components/Layout';
import Search from './components/Search';
import Results from './components/Results';
import Details from './components/Details';

import theme from './theme';
import {SEARCH_QUERY} from './const/queryParams';

const App = () => {
  const homePathMatch = useRouteMatch({path: '/', exact: true, strict: true});
  const history = useHistory();
  const handleSubmit = value =>
    history.push(`/search?${SEARCH_QUERY}=${encodeURIComponent(value)}`);

  return (
    <ThemeProvider theme={theme}>
      <Layout isHomeLayout={Boolean(homePathMatch)}>
        <Switch>
          <Route path="/search">
            <Results onSubmit={handleSubmit} />
          </Route>
          <Route path="/details/:id">
            <Details onSubmit={handleSubmit} />
          </Route>
          <Route path="/">
            <Search onSubmit={handleSubmit} />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  )
};

export default App;
