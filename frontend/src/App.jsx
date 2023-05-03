import './App.css';
import UserRegisterScreen from './screens/UserRegisterScreen';
import UsersScreen from './screens/UsersScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import { Routes, Route } from 'react-router-dom';

function App() {
  return(
    <Routes>
      <Route path='/' element={<UsersScreen />}/>
      <Route path='/registro' element={<UserRegisterScreen />}/>
      <Route path='*' element={<NotFoundScreen />}/>
    </Routes>
  );
  
}

export default App;
