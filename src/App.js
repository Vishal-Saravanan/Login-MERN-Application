import './App.css';
import Signup from './Signup';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login';
import Home from './Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/register' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Route>
      </Routes>    
    </BrowserRouter>
   
  );
}

export default App;
