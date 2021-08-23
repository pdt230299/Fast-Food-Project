import React, { useEffect, useState } from 'react';

import ProductList from './ProductList';
import productApi from '../../../api/productApi';
import Pagination from './Pagination';
import Search from './Search';
import FilterOption from './FilterOption';

function Body() {
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 9,
        totalRow: 100
    });
    const [filters, setFilter] = useState({
        page: 1,
        limit: 9
    });
    function handlePageChange(newPage) {
        setFilter({ ...filters, page: newPage });
    }

    function handleSearchChange(value) {
        setFilter({
            limit: 9,
            page: 1,
            search: value.searchTerm
        });
    }
    function handleTypeChange(value) {
        setFilter({
            limit: 9,
            page: 1,
            type: value.type
        });
    }
    // Get List with pagination
    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await productApi.getAll(filters);
                const response2 = await productApi.getAll();
                setProductList(response);
                if (response.length < filters.limit) {
                    setPagination(prevState => ({
                        ...prevState,
                        page: filters.page,
                        totalRow: response.length
                    }));
                } else {
                    setPagination(prevState => ({
                        ...prevState,
                        page: filters.page,
                        totalRow: response2.length
                    }));
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchProductList();
    }, [filters]);

    return (
        <div className='flex flex-col items-center gap-y-8 my-8 mx-auto max-w-6xl '>
            <h1 className=' text-center rounded-b-lg inline-block p-8 w-1/2 text-3xl font-poppins uppercase bg-yellow-300'>
                ☕ Menu for you 🍔
            </h1>

            <div className='flex flex-col items-center'>
                <div className='w-full flex justify-around gap-x-20'>
                    <FilterOption onFilter={handleTypeChange} />
                    <Search onSubmit={handleSearchChange} />
                </div>
                <ProductList productList={productList} />
                <Pagination pagination={pagination} onPageChange={handlePageChange} />
            </div>
        </div>
    );
}

export default Body;
