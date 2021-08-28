import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/solid';

function Card({ comments, value }) {
    let stars = 0;
    const starCheckedArr = [];
    const starArr = [];
    const listCommentOfProduct = comments.filter((element) => element.productId == value.id);
    let average = listCommentOfProduct.reduce((sum, ele) => sum + ele.stars, 0) / listCommentOfProduct.length;

    if (!Number.isNaN(average)) {
        stars = Math.round(average);
    }

    function makeStar(number) {
        for (let i = 0; i < number; i++) {
            starCheckedArr.push(i);
        }
        for (let i = 0; i < (5 - number); i++) {
            starArr.push(i);
        }
    }
    makeStar(stars);
    return (
        <div className=' font-poppins group w-80 p-6 bg-white hover:shadow-2xl transition-all transform duration-200'>
            <img
                className='w-64 h-60 object-cover rounded-t-md'
                src={value.imgUrl}
                alt=''
            />
            <div className='mt-4 h-48'>
                <h1 className='select-none h-16 text-2xl font-medium text-gray-700'>
                    {value.name}
                </h1>
                <p className='select-none h-8 text-sm mt-2  text-gray-700'>{value.description}</p>
                <div className='flex mt-4'>
                    {starCheckedArr.map(() => <StarIcon className='w-4 text-yellow-500' />)}
                    {starArr.map(() => <StarIcon className='w-4' />)}
                </div>
                <div className='select-none mt-4 mb-2 flex justify-between pl-4 pr-2'>
                    <h1 className='text-2xl font-normal text-gray-700'>
                        {value.price}
                        $
                    </h1>
                    <Link to={`/menu/${value.id}`} className='hover:opacity-60 text-gray-800 font-semibold hover:shadow-md transition duration-300'>
                        <button type='button' className='text-lg group-hover:bg-yellow-400 font-semibold py-2 px-6 text-white '>
                            Detail
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

Card.defaultProps = {
    value: {},
    comments: []
};

Card.propTypes = {
    value: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        id: PropTypes.string,
        imgUrl: PropTypes.string
    }),
    comments: PropTypes.array
};

export default Card;
