
const initState = {
   users: [],
   userEdit: {},
   auths: []
};

const reducerUser = (state = initState, action) => {
   switch (action.type) {
      case 'signUp':
         return{
            ...state,
         }
      case 'succes':
         return {
            ...state,
            users: action.payload,
         };
      case 'auth':
            return {
               ...state,
               auths: action.payload,
            };
      case 'delete':
      case 'update':
      case 'add':
         return {
            ...state,
         };
      case 'selected':
         return {
            ...state,
            userEdit: action.payload,
         };
      default:
         return state;
   }
};

export default reducerUser;
