import axiosClient from './axiosClient';

const commentApi = {
    getAll: (params) => {
        const url = '/comments';
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/comments/${id}`;
        return axiosClient.get(url);
    },
    post: (body) => {
        const url = '/comments';
        return axiosClient.post(url, { body });
    }

};

export default commentApi;