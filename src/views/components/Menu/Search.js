import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ onSubmit }) {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearchTermChange(e) {
        setSearchTerm(e.target.value);

        if (!onSubmit) return;

        const formValues = {
            searchTerm: e.target.value
        };
        onSubmit(formValues);
    }

    return (
        <div className="relative focus-within:text-gray-900">
            <form>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </span>
                <input type="search" className=" focus:bg-yellow-300 focus:outline-none duration-300 ease-in-out py-2 text-black rounded-md pl-10 font-medium text-xl" placeholder="Search..." value={searchTerm} onChange={handleSearchTermChange} />
            </form>
        </div>
    );
}

Search.propTypes = {
    onSubmit: PropTypes.func
};

Search.defaultProps = {
    onSubmit: null
};
export default Search;