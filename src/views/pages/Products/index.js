import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import ProductsLayout from '../../layout/Products';
import { AuthenticateContext } from '../../components/AuthenticateContext';

function ProductsPage() {
    const { useStateAuthenticated } = useContext(AuthenticateContext);
    const [isAuthenticated] = useStateAuthenticated;
    let result = <ProductsLayout />;
    if (isAuthenticated == false) {
        result = <Redirect to='/login' />;
    }
    return result;
}
export default ProductsPage;
