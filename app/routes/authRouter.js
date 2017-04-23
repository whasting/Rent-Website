import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter} from 'react-router-dom';
import reducers from '../views/src/reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ADD_ITEM } from '../views/src/actions/list_actions';
import passport from 'passport';
import App from './app';
import '../../config/passport';

let router = express.Router();


router.post('/login', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
    }),
    function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.redirect('/users/' + req.user.username);
    });


router.post('/signup', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signup',
    }),
    function(req, res) {
        res.redirect('/users/' + req.user.username);
    }
);

router.get('/login', (req, res) => {
    const context = {};

    const store = createStore(reducers);
    const finalState = JSON.stringify(store.getState());

    store.dispatch({
        type: ADD_ITEM,
        payload: {
            name: 'Components',
            description: 'Description for components'
        }
    });
    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}
            >
                <App/>
            </StaticRouter>
        </Provider>
    );

    res.render('index.ejs', {
        initialState: finalState,
        html: html,
    });
});

router.get('/signup', function(req, res) {
    const context = {};
    const store = createStore(reducers);
    store.dispatch({
        type: ADD_ITEM,
        payload: {
            name: 'Components',
            description: 'Description for components'
        }
    });

    const finalState = JSON.stringify(store.getState());
    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}
            >
                <App/>
            </StaticRouter>
        </Provider>
    );

    res.render('index.ejs', {
        initialState: finalState,
        html: html,
    });
});

export default router;
