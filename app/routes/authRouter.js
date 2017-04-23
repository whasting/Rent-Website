import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter} from 'react-router-dom';
import passport from 'passport';
import App from './app';
import '../../config/passport';
import bcrypt from 'bcrypt';
var models = require('../db/models');


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


router.post("/signup", function(req, res){
    models.User.findOne({
        where: {
            username: req.body.username,
        }
    }).then(function(user){
        if(!user){
            models.User.create({
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password)
            }).then(function(user){
                passport.authenticate("local", {failureRedirect:"/signup", successRedirect: "/posts"})(req, res, next)
            })
        } else {
            res.send("user exists")
        }
    });
});

router.get('/login', (req, res) => {
    const context = {};

    const html = ReactDOMServer.renderToString(
        <StaticRouter
            location={req.url}
            context={context}
        >
            <App/>
        </StaticRouter>
    );

    res.render('index.ejs', {
        html: html,
    });
});

router.get('/signup', function(req, res) {
    let context = {};

    const html = ReactDOMServer.renderToString(
        <StaticRouter
            location={req.url}
            context={context}
        >
            <App/>
        </StaticRouter>
    );
    res.render('index.ejs', {
        html: html,
    });
});

export default router;
