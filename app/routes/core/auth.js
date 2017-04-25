import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter} from 'react-router-dom';
import passport from 'passport';
import App from '../app';


export default {
    logout: function(req, res) {
        req.session.destroy(() => {
            res.redirect('/login');
        })
    },
    signup: passport.authenticate('local-signup', {
            successRedirect : '/',
            failureRedirect : '/signup',
            failureFlash : true,
    }),
    login: passport.authenticate('local-login', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash : true,
    }),
    renderLogin: function(req, res) {
        const context = {};

        const html = ReactDOMServer.renderToString(
            <StaticRouter
                location={req.url}
                context={context}
            >
                <App/>
            </StaticRouter>
        );

        res.render('login.ejs', {
            html: html,
            message: req.flash('loginMessage')
        });
    },
    renderSignup: function(req, res) {
        let context = {};

        const html = ReactDOMServer.renderToString(
            <StaticRouter
                location={req.url}
                context={context}
            >
                <App/>
            </StaticRouter>
        );
        res.render('signup.ejs', {
            html: html,
            message: req.flash('loginMessage')
        });
    },
};
