// export const GET_ALL_USERS = 'GET_ALL_USERS';
// export const CREATE_NEW_USER = 'CREATE_NEW_USER';
// export const REMOVE_USER = 'REMOVE_USER';


export const createUser = (user) => {
    return {
      type: 'CREATE_NEW_USER',
      user: user
    }
  };

