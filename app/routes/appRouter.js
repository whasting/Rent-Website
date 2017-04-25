import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter} from 'react-router-dom';
import App from './app';
import app from './api/app';

let router = express.Router();

router.get('/', app.renderApp);

export default router;
