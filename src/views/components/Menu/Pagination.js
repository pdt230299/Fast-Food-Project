import React from 'react';
import PropTypes from 'prop-types';
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';

function Pagination({ pagination, onPageChange }) {
    const { page, limit, totalRow } = pagination;
    const totalPages = Math.ceil(totalRow / limit);
    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }
    return (
        <div className='flex gap-x-8 font-poppins'>
            <button disabled={page <= 1} className='disabled:text-black  disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-yellow-200 uppercase p-3 w-12 md:w-16 font-medium bg-yellow-200 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-100' type='button' onClick={() => handlePageChange(page - 1)}>
                <ArrowCircleLeftIcon />
            </button>
            <button className='disabled:text-black  disabled:opacity-50 disabled:cursor-not-allowed uppercase p-3 w-12 md:w-16 font-medium bg-yellow-200 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-100' type='button' disabled={page >= totalPages} onClick={() => handlePageChange(page + 1)}>
                <ArrowCircleRightIcon />
            </button>
        </div>
    );
}

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
};

Pagination.defaultProps = {
    onPageChange: null
};

export default Pagination;
