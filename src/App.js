import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePost from './components/CreatePost/CreatePost';
import Login from './components/LoginPage/Login';
import Main from './components/Main/Main';
import Messenger from './components/Messenger/Messenger';
import Profile from './components/Profile/Profile';
// import UniqItem from './components/UniqItem/UniqItem';
import HomeWrapper from './pages/HomeWrapper';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeWrapper />} >
          <Route index element={<Main/>}/>
          <Route path='messenger' element={<Messenger />} />
          <Route path='profile' element={<Profile />} />
          <Route path='create' element={<CreatePost />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
