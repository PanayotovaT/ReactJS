import {Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';

import { Header } from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  return (
    <AuthProvider>
      <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<Home />} ></Route>
              <Route path="/login" element={<Login />}></Route>
          </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
