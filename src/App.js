import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import ErrorBoundary from './ErrorBoundary';

import { Header } from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MyList from './components/MyList.js/MyList';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/my-list" element={<MyList />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
