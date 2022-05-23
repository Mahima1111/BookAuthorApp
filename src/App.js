import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/Login';
import Register from './components/Register';
import Add from './components/Add';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';


function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
  <Route path='/' exact element={<Login/>}/>
  <Route path='/register' exact element={<Register/>}/>
  <Route path='/add' exact element={<Add/>}/>
  <Route path='/view' exact element={<View/>}/>
</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
