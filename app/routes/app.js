import React from 'react';
import { Switch } from 'react-router-dom';

const RedirectWithStatus = ({ from, to, status }) => (
  <Route render={({ staticContext }) => {
    // there is no `staticContext` on the client, so
    // we need to guard against that here
    if (staticContext)
      staticContext.status = status;
    return <Redirect from={from} to={to}/>;
  }}/>
);

const App = () => (
    <Switch>
        <RedirectWithStatus
            status={301}
            from="/users"
            to="/profiles"
        />
        <RedirectWithStatus
            status={302}
            from="/courses"
            to="/dashboard"
        />
    </Switch>
);

export default App;
