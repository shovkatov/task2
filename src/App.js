import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import SelectedUser from './components/SelectedUser';
import UsersHook from './components/UsersHook';
import store from './redux/store';

function App() {
   return (
      <Provider store={store}>
         <div className="App">
            <Routes>
               <Route path="/" element={<UsersHook />} />
               <Route path="/user/:id" element={<SelectedUser />} />
               <Route path="/add_user" element={<AddUser />} />
               <Route path="/edit_user/:id" element={<EditUser />} />
            </Routes>
         </div>
      </Provider>
   );
}

export default App;
