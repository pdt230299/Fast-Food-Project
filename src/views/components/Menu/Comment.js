import React from 'react';
import PropTypes from 'prop-types';
import { StarIcon } from '@heroicons/react/solid';

function Comment({ value }) {
    const starCheckedArr = [];
    const starArr = [];
    function makeStar(number) {
        for (let i = 0; i < number; i++) {
            starCheckedArr.push(i);
        }
        for (let i = 0; i < (5 - number); i++) {
            starArr.push(i);
        }
    }
    makeStar(value.stars);
    return (
        <div className='flex gap-x-8 p-4 md:p-8 w-2/3 border-2 border-gray-500 rounded-3xl hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300'>
            <div className='w-20 '>
                <img className='rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbGozsS9QP10p16rZiCrQD0koXVkI4c7LwUHab9dkmFRcN0VqCkB37f2y0EnySItwykg&usqp=CAU' />
            </div>
            <div>
                <p className='text-gray-600'>
                    {value.content}
                </p>
                <div className='flex font-bold uppercase mt-6'>
                    {starCheckedArr.map(() => <StarIcon className='w-4 text-yellow-500' />)}
                    {starArr.map(() => <StarIcon className='w-4' />)}
                </div>
                <div className='mt-4 text-gray-600'> - Anonymous - </div>
            </div>
        </div>
    );
}
Comment.defaultProps = {
    value: {}
};

Comment.propTypes = {
    value: PropTypes.shape({
        stars: PropTypes.number,
        content: PropTypes.string
    })
};

export default Comment;
