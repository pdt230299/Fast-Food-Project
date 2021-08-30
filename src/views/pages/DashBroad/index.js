import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import DashBroadLayout from '../../layout/DashBroad';
import { AuthenticateContext } from '../../components/AuthenticateContext';

function DashBroadPage() {
    const { useStateAuthenticated } = useContext(AuthenticateContext);
    const [isAuthenticated] = useStateAuthenticated;
    console.log(isAuthenticated);
    let result = <DashBroadLayout />;
    if (isAuthenticated == false) {
        result = <Redirect to='/login' />;
    }
    return result;
}
export default DashBroadPage;
