import { remove, post, put } from './privateApiService';
import { get } from './publicApiService';

export const getSlides = (id = null) => {
  return get(process.env.REACT_APP_SLIDES, id)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const searchSlides = (word) => {
  return get(process.env.REACT_APP_SLIDES, word)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postSlides = (data) => {
  return post(process.env.REACT_APP_SLIDES, data)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const deleteSlides = (id) => {
  return remove(process.env.REACT_APP_SLIDES, id)
    .then(res => res.data)
    .catch(error => console.log(error));
};

export const editSlides = (id, payload) => {
  return put(process.env.REACT_APP_SLIDES, id, payload)
    .then(res => res.data)
    .catch(error => console.log(error));
};
