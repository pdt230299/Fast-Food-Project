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
    post: ({ content, stars, productId }) => {
        const url = '/comments';
        return axiosClient.post(url, { content, stars, productId });
    }

};

export default commentApi;