import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter} from 'react-router-dom';
import passport from 'passport';
import App from '../app';

export default {
    renderApp: function(req, res) {
        const context = {};
        const html = ReactDOMServer.renderToString(
            <StaticRouter
                location={req.url}
                context={context}
            >
                <App/>
            </StaticRouter>
        );

        if (req.user) {
            res.render('index.ejs', {
                html: html,
            });
        } else {
            res.render('login.ejs', {
                html: html,
                message: req.flash('loginMessage')
            });
        }

    },
};
