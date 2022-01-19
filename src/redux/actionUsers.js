import axios from 'axios';

export const _URL = 'http://localhost:3005/users';

const succesUser = (user) => {
   return {
      type: 'succes',
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

export const getUser = () => {
   return (dispatch) => {
      axios.get(`${_URL}`).then((res) => {
         const data = res.data;
         dispatch(succesUser(data));
      });
   };
};

export const deletUser = (id) => {
   return (dispatch) => {
      axios.delete(`${_URL}/${id}`).then((res) => {
         dispatch(deltUser());
         dispatch(getUser());
      });
   };
};

export const addedUser = (newUser) => {
   return (dispatch) => {
      axios.post(`${_URL}`, newUser).then((res) => {
         dispatch(adUser());
         dispatch(getUser());
      });
   };
};

export const getSelectedUser = (id) => {
   return (dispatch) => {
      axios.get(`${_URL}/${id}`).then((res) => {
         dispatch(getSelectUser(res.data));
      });
   };
};

export const updateUser = (user, id) => {
   return (dispatch) => {
      axios.put(`${_URL}/${id}`, user).then((res) => {
         dispatch(upUser());
         dispatch(getUser())
      });
   };
};
