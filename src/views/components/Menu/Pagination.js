import React from 'react';
import Proptypes from 'prop-types';

function Pagination({ pagination, onPageChange }) {
    const { page, limit, totalRow } = pagination;
    const totalPages = Math.ceil(totalRow / limit);

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }
    return (
        <div className='flex gap-x-8'>
            <button disabled={page <= 1} className='disabled:text-black  disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-yellow-200 uppercase p-4 w-32 bg-yellow-200 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-100' type='button' onClick={() => handlePageChange(page - 1)}>
                previous
            </button>
            <button className='disabled:text-black  disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-yellow-200 uppercase p-4 w-32 bg-yellow-200 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-100' type='button' disabled={page >= totalPages} onClick={() => handlePageChange(page + 1)}>
                next
            </button>
        </div>
    );
}

Pagination.propTypes = {
    pagination: Proptypes.object.isRequired,
    onPageChange: Proptypes.func
};

Pagination.defaultProps = {
    onPageChange: null
};

export default Pagination;
