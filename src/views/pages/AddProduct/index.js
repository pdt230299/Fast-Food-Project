import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import AddProductLayout from '../../layout/AddProduct';
import { AuthenticateContext } from '../../components/AuthenticateContext';

function AddProductPage() {
    const { useStateAuthenticated } = useContext(AuthenticateContext);
    const [isAuthenticated] = useStateAuthenticated;
    console.log(isAuthenticated);
    let result = <AddProductLayout />;
    if (isAuthenticated == false) {
        result = <Redirect to='/login' />;
    }
    return result;
}

export default AddProductPage;