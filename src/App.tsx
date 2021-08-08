import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from "components";
import {TablePage, AboutPage} from "pages";

function App() {

    return (
        <Router>
            <Header/>
            <div className="Container">
                <Switch>
                    <Route exact path='/'>
                        <TablePage/>
                    </Route>
                    <Route exact path='/about'>
                        <AboutPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
