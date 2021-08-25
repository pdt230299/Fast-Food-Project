/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import React, { useState, useContext } from 'react';

import { CommentContext } from '../../layout/CardDetail';

function FilterComments() {
    const [type, setType] = useState('');
    const { filterContext } = useContext(CommentContext);
    // eslint-disable-next-line
    const [filter, setFilter] = filterContext;

    function handleTypeChange(e) {
        setType(parseInt(e.target.value, 10));
        const formValues = {
            stars: parseInt(e.target.value, 10)
        };
        setFilter(formValues);
    }

    return (
        <div className='w-2/3'>
            <select className=' outline-none rounded-md bg-yellow-100 focus:bg-white border-2 border-yellow-300 focus:border-yellow-300 p-1 shadow-xl  ' onChange={handleTypeChange} value={type} required>
                <option value=''>ALL</option>
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
    );
}

export default FilterComments;
