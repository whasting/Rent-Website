import express from 'express';
import router from './routes/index';
import expressSession from 'express-session';
import passport from 'passport';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import passportConfig from './config/passport';

let app = express();

app.use('/bin', express.static('./bin'));
app.use('/stylesheets', express.static('./public/stylesheets'));

passportConfig(passport);

// Express
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

// Passport
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', router);
app.use('/view/*', router);

app.listen(3000, function () {
	console.log('Hello World listening on port 3000!');
});
