import { remove, get, post, put } from './privateApiService';

export const getUser = (id) => {
  return get(process.env.REACT_APP_USERS, id)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const createUser = (data) => {
  return post(process.env.REACT_APP_USERS, data)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const editUser = (data, id) => {
  return put(process.env.REACT_APP_USERS, data, id)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const deleteUser = (id) => {
  return remove(process.env.REACT_APP_USERS, id)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
