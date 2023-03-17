import logo from './logo.svg';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import User from './pages/User';
import Home from './pages/Home';
import { auth } from './libs/firebase';
import Logout from './pages/Logout';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userSlice from './components/userSlice';

const ProtectedRoutes = () => {
  return auth?.currentUser?.displayName ? <Outlet></Outlet> : <Navigate to="/" />; //如果user有登入則匯入曹狀Route，否則變成Navigate轉導回Home。
}

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route element={<ProtectedRoutes></ProtectedRoutes>}>
              <Route path='/logout' element={<Logout></Logout>}></Route>
            </Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route element={<ProtectedRoutes></ProtectedRoutes>}>
              <Route path='/user' element={<User></User>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
