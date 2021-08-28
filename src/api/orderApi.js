import axiosClient from './axiosClient';

const orderApi = {
    getAll: (params) => {
        const url = '/orders';
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/orders/${id}`;
        return axiosClient.get(url);
    },

    post: ({ cart, totalMoney }) => {
        const url = '/orders';
        return axiosClient.post(url, { cart, totalMoney });
    }
};

export default orderApi;