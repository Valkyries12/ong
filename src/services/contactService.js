import { remove, get, post, put } from './privateApiService';


export const getContact = (id) => {
  return get(process.env.REACT_APP_CONTACTS, id)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const createContact = (data) => {
  return post(process.env.REACT_APP_CONTACTS, data)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const editContact = (data, id) => {
  return put(process.env.REACT_APP_CONTACTS, data, id)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const deleteContact = (id) => {
  return remove(process.env.REACT_APP_CONTACTS, id)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
