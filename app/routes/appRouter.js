import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter} from 'react-router-dom';
import reducers from '../views/src/reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ADD_ITEM } from '../views/src/actions/list_actions';
import App from './app';

let router = express.Router();

router.get('/', (req, res) => {
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

export default router
