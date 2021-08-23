import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

function ProductList({ productList }) {
    return (
        <div className='my-4 mx-auto max-w-6xl'>
            <div className='flex flex-wrap justify-center gap-4'>
                {productList.map((ele, index) => <Card value={ele} key={index} />)}
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
