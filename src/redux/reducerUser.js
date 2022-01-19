const initState = {
   users: [],
   userEdit: {},
};

const reducerUser = (state = initState, action) => {
   switch (action.type) {
      case 'succes':
         return {
            ...state,
            users: action.payload,
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
