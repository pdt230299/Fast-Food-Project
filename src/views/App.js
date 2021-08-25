import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routers from '../routers';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import CartContextProvider from './components/CartContext';

const App = () => (
    <div className='App'>
        <CartContextProvider>
            <Router>
                <Header />
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
                <Footer />
            </Router>
        </CartContextProvider>
    </div>
);

export default App;
