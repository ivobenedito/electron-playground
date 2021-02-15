import React from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import AllItems from './pages/AllItems';
import InstalledItems from './pages/InstalledItems';
import ItemDetail from './pages/ItemDetail';
import OutdatedItems from './pages/OutdatedItems';

function RouterPlayground() {
  return (
    <HashRouter>
      <h1>Welcome to this test app!</h1>

      <ul>
        <li>
          <Link to="/items">
            All Items
          </Link>
        </li>
        <li>
          <Link to="/items/installed">
            Installed Items
          </Link>
        </li>
        <li>
          <Link to="/items/outdated">
            Outdated Items
          </Link>
        </li>
        <li>
          <Link to="/items/itemABC">
            Item Detail (itemABC)
          </Link>
        </li>
      </ul>
      
      <Switch>
        <Route exact path="/items" component={AllItems} />
        <Route exact path="/items/installed" component={InstalledItems} />
        <Route exact path="/items/outdated" component={OutdatedItems} />
        <Route exact path="/items/:name" component={ItemDetail} />
      </Switch>
    </HashRouter>
  );
}

export default RouterPlayground;
