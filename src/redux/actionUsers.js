import axios from 'axios';

export const _URL = 'http://localhost:3005';

const succesUser = (user) => ({
      type: 'succes',
      payload: user,
   })

const auth = (user) => {
   return {
      type: 'auth',
      payload: user,
   };
};

const deltUser = () => {
   return {
      type: 'delete',
   };
};

const adUser = () => {
   return {
      type: 'add',
   };
};

const upUser = () => {
   return {
      type: 'update',
   };
};

const getSelectUser = (user) => {
   return {
      type: 'selected',
      payload: user,
   };
};

const signup = (token) => {
   return {
      type: 'signUp',
      payload: token,
   };
};

export const getUser = () => {
   return (dispatch) => {
      axios.get(`${_URL}/users`).then((res) => {
         const data = res.data;
         dispatch(succesUser(data));
      });
   };
};

export const deletUser = (id) => {
   return (dispatch) => {
      axios.delete(`${_URL}/users/${id}`).then((res) => {
         dispatch(deltUser());
         dispatch(getUser());
      });
   };
};

export const addedUser = (newUser) => {
   return (dispatch) => {
      axios.post(`${_URL}/users`, newUser).then((res) => {
         dispatch(adUser());
         dispatch(getUser());
      });
   };
};

export const getSelectedUser = (id) => {
   return (dispatch) => {
      axios.get(`${_URL}/users/${id}`).then((res) => {
         dispatch(getSelectUser(res.data));
      });
   };
};

export const updateUser = (user, id) => {
   return (dispatch) => {
      axios.put(`${_URL}/users/${id}`, user).then((res) => {
         dispatch(upUser());
         dispatch(getUser());
      });
   };
};

export const signUp = (user) => {
   return (dispatch) => {
     axios.post(`${_URL}/auth`, user).then((token) => {
         dispatch(signup(token.data));
      });
   };
};

export const getAuth = () => {
   return (dispatch) => {
      axios.get(`${_URL}/auth`).then((res) => {
         const data = res.data;
         dispatch(auth(data));
      });
   };
};