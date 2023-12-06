
import Backendless from 'backendless';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Articles from './components/Articles';

function App() {

  Backendless.serverURL = "https://eu-api.backendless.com"
Backendless.initApp( process.env.REACT_APP_APP_ID, process.env.REACT_APP_KEY );

  return (
    <div className="App">
  
 <Routes >
  <Route path='/articles' element={<Articles />} />

 </Routes>
    </div>
  );
}

export default App;
