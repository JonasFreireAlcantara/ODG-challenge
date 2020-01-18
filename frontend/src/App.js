import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

// Prime React configuration
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Home from "./pages/home";
import DataExploration from './pages/data_exploration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/data" component={DataExploration} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
