import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './Components/User';
import CreateUser from './Components/CreateUser';
import Updateuser from './Components/Updateuser';


function App() {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path='/' element={<User/>}></Route>
          <Route path='/create' element={<CreateUser/> }></Route>
          <Route path='/update' element={<Updateuser/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
