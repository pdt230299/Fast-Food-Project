import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routers from '../routers';
import CartContextProvider from './components/CartContext';
import AuthenticateContextProvider from './components/AuthenticateContext';

const App = () => (
    <div className='App'>
        <CartContextProvider>
            <AuthenticateContextProvider>
                <Router>
                    <Switch>
                        <Switch>
                            {
                                routers.map((route, i) => (
                                    // eslint-disable-next-line react/jsx-props-no-spreading
                                    <Route exact key={i} {...route} />
                                ))
                            }
                        </Switch>
                    </Switch>
                </Router>
            </AuthenticateContextProvider>
        </CartContextProvider>
    </div>
);

export default App;
