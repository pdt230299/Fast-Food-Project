import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import OrdersLayout from '../../layout/Orders';
import { AuthenticateContext } from '../../components/AuthenticateContext';

function OrdersPage() {
    const { useStateAuthenticated } = useContext(AuthenticateContext);
    const [isAuthenticated] = useStateAuthenticated;
    console.log(isAuthenticated);
    let result = <OrdersLayout />;
    if (isAuthenticated == false) {
        result = <Redirect to='/login' />;
    }
    return result;
}
export default OrdersPage;
