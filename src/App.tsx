import React from 'react';
import LayerViewerPage from './Pages/LayerViewer';
import LayerImportPage from './Pages/LayerImport';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={LayerViewerPage} />
              <Route path="/import" component={LayerImportPage} />
          </Switch>
      </BrowserRouter>
    </Provider>

  
  );
}

export default App;
