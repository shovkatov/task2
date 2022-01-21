import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Header from './components/Header';
import LogIn from './components/LogIn';
import SelectedUser from './components/SelectedUser';
import SignUp from './components/SignUp';
import UsersHook from './components/UsersHook';
import store from './redux/store';

function App() {
   return (
      <Provider store={store}>
         <div className="App">
            <Header />
            <Routes>
               <Route path="/home" element={<UsersHook />} />
               <Route path="/user/:id" element={<SelectedUser />} />
               <Route path="/add_user" element={<AddUser />} />
               <Route path="/edit_user/:id" element={<EditUser />} />
               <Route path="/" element={<LogIn />} />
               <Route path="/sign-up" element={<SignUp />} />
            </Routes>
         </div>
      </Provider>
   );
}

export default App;
