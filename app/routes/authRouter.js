import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter} from 'react-router-dom';
import passport from 'passport';
import auth from './core/auth';
import '../../config/passport';


let router = express.Router();

router.post('/login', auth.login);
router.post('/signup', auth.signup);

router.get('/login', auth.renderLogin);
router.get('/signup', auth.renderSignup);
router.get('/logout', auth.logout);

export default router;
