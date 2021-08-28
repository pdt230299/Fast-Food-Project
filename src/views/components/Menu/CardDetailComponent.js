/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import CommentForm from './CommentForm';
import FilterComments from './FilterComments';
import { CartContext } from '../CartContext';

function CardDetailComponent({ valueProduct, valueComment }) {
    const { useStateCart } = useContext(CartContext);
    const [cart, setCart] = useStateCart;
    function addCart() {
        const inCart = cart.some((ele) => ele.id == valueProduct.id);
        if (inCart) {
            alert('Products already in the cart!');
        } else {
            const newValueProduct = {
                ...valueProduct,
                quantity: 1
            };
            setCart([...cart, newValueProduct]);
            alert('Product added successfully!');
        }
    }
    return (
        <div>
            <section className=' font-poppins text-gray-700 body-font overflow-hidden bg-white'>
                <div className='container px-5 py-24 mx-auto flex flex-col items-center gap-y-8'>
                    <div className='lg:w-4/5 mx-auto flex flex-wrap'>
                        <img
                            alt='ecommerce'
                            className='lg:w-1/2 w-full object-cover object-center rounded border border-gray-200'
                            src={valueProduct.imgUrl}
                        />
                        <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                            <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                                {valueProduct.type}
                            </h2>
                            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                                {valueProduct.name}
                            </h1>
                            <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'>
                                <div className='flex'>
                                    <p className='leading-relaxed'>
                                        {valueProduct.description}
                                    </p>
                                </div>
                            </div>
                            <div className='flex'>
                                <span className='title-font font-medium text-2xl text-gray-900'>
                                    $
                                    {valueProduct.price}
                                </span>
                                <button onClick={addCart} type='button' className='flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded'>
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-2/3 w-full flex flex-col gap-8 border-2  border-gray-200 items-center py-12 rounded-lg'>
                        <h1 className=' text-2xl'>Comment</h1>
                        <CommentForm />
                        <FilterComments />
                        {valueComment.map((ele, index) => <Comment key={index} value={ele} />)}
                    </div>
                </div>
            </section>
        </div>
    );
}

CardDetailComponent.defaultProps = {
    valueProduct: {},
    valueComment: []
};

CardDetailComponent.propTypes = {
    valueProduct: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        id: PropTypes.string,
        imgUrl: PropTypes.string,
        type: PropTypes.string
    }),
    valueComment: PropTypes.shape({
        map: PropTypes.func
    })
};
export default CardDetailComponent;
