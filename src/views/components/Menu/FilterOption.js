import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FilterOption({ onFilter }) {
    const [type, setType] = useState('');

    function handleTypeChange(e) {
        setType(e.target.value);
        if (!onFilter) return;
        const formValues = {
            type: e.target.value
        };
        onFilter(formValues);
    }

    return (
        <div>
            <select className='outline-none rounded-md bg-yellow-300 focus:bg-white border-2 border-yellow-300 focus:border-yellow-300 p-1 shadow-xl  ' onChange={handleTypeChange} value={type} required>
                <option value=''>ALL</option>
                <option value='Burger'>Burger</option>
                <option value='Drink'>Drink</option>
            </select>
        </div>
    );
}

FilterOption.propTypes = {
    onFilter: PropTypes.func
};

FilterOption.defaultProps = {
    onFilter: null
};
export default FilterOption;