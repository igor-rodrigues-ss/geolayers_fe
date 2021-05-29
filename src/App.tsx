import LayerViewerPage from './Pages/LayerViewer';
import LayerUploadPage from './Pages/LayerUpload';
import FileModelsPage from './Pages/FileModels';

import TasksPages from './Pages/Tasks';

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
              <Route path="/upload" component={LayerUploadPage} />
              <Route path="/tarefas" component={TasksPages} />
              <Route path="/arquivos-modelo" component={FileModelsPage} />
              
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
