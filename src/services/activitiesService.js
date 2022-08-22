/* eslint-disable camelcase */
import { remove, get, post, put, getSearch } from './privateApiService';

export const getActivities = (id) => {
  return get(process.env.REACT_APP_ACTIVITIES, id)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getSearchActivities = (word) => {
  return getSearch(process.env.REACT_APP_ACTIVITIES, word)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postActivity = (id, name, slug, description, image, user_id, category_id, created_at, updated_at, deleted_at) => {
  const payload = {
    id: id,
    name: name,
    slug: slug,
    content: description,
    image: image,
    user_id: user_id,
    category_id: category_id,
    created_at: created_at,
    updated_at: updated_at,
    deleted_at: deleted_at
  };
  return post(process.env.REACT_APP_ACTIVITIES, payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const deleteActivity = (id) => {
  return remove(process.env.REACT_APP_ACTIVITIES, id)
    .then(res => res.data)
    .catch(error => console.log(error));
};

export const editActivity = (id, payload) => {
  return put(process.env.REACT_APP_ACTIVITIES, id, payload)
    .then(res => res.data)
    .catch(error => console.log(error));
};
