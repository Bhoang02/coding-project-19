// U89173488

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Gallery} />
                    {/* Add more routes if needed */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
