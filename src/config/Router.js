import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../containers/App';
// import SuggestionFormContainer from '../containers/SuggestionFormContainer';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            {/* <Route exact path='/suggestion-form' component={SuggestionFormContainer} /> */}
        </Switch>
    </BrowserRouter>
);

export default Router;
