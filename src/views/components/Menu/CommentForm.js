/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CommentContext } from '../../layout/CardDetail';
import commentApi from '../../../api/commentApi';

function CommentForm() {
    const { slug } = useParams();

    const [item, setItem] = useState('');
    const [starsState, setStarsState] = useState(5);
    const { commentContext } = useContext(CommentContext);
    const [comment, setComment] = commentContext;

    function handleChange(e) {
        setItem(e.target.value);
    }
    function handleChangeSelect(e) {
        setStarsState(e.target.value);
    }
    function handleSubmit(e) {
        if (item !== '') {
            const itemComment = { stars: parseInt(starsState, 10), content: item, productId: slug };
            setComment([itemComment, ...comment]);
            setItem('');
            const postComment = async () => {
                try {
                    await commentApi.post(itemComment);
                } catch (error) {
                    console.log(error);
                }
            };
            postComment();
        }
        e.preventDefault();
    }

    return (
        <div className='w-2/3 gap-4'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <p className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                    Your Message
                </p>
                <div>
                    <p className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                        Dont Forget To Rate ⭐
                    </p>
                    <select value={starsState} onChange={handleChangeSelect} className='w-40 outline-none rounded-md bg-yellow-100 focus:bg-white border-2 border-yellow-300 focus:border-yellow-300 p-1 shadow-xl' required>
                        <option value='1'>
                            ⭐
                        </option>
                        <option value='2'>
                            ⭐⭐
                        </option>
                        <option value='3'>
                            ⭐⭐⭐
                        </option>
                        <option value='4'>
                            ⭐⭐⭐⭐
                        </option>
                        <option value='5'>
                            ⭐⭐⭐⭐⭐
                        </option>
                    </select>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col -mx-3 mb-6'>
                    <div className='w-full px-3'>
                        <textarea
                            onChange={handleChange}
                            value={item}
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        />
                    </div>
                    <button className='mr-4 self-end shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded' type='submit'>
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CommentForm;
