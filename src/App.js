import Main from './components/Main';
import Register from './components/Register';
import Nav from './components/Nav';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';





function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main />}> </Route>
        <Route path='/register' element={<Register />}> </Route>
        <Route path='/login' element={<Login />}> </Route>
        <Route path='/dashboard' element={<Dashboard />}> </Route>
      </Routes>
    
    </div>
  
  );
}

export default App;
