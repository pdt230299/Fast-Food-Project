import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import CommentApi from '../../../api/commentApi';

function ProductList({ productList }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchCommentsList = async () => {
            try {
                const response = await CommentApi.getAll();
                setComments(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCommentsList();
    }, []);

    return (
        <div className='my-4 mx-auto max-w-6xl'>
            <div className='flex flex-wrap justify-center gap-4'>
                {productList.map((ele, index) => <Card comments={comments} value={ele} key={index} />)}
            </div>
        </div>
    );
}

ProductList.defaultProps = {
    productList: []
};

ProductList.propTypes = {
    productList: PropTypes.array
};

export default ProductList;
