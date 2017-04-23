import express from 'express';
import appRouter from './app/routes/appRouter';
import authRouter from './app/routes/authRouter';
import expressSession from 'express-session';
import passport from 'passport';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import {
	LoginStrategy,
    SignupStrategy,
} from './app/config/passport';

let app = express();

// Views
app.set('views', 'app/views');
app.set('view engine', 'ejs');

app.use('/bin', express.static('./bin'));
app.use('/stylesheets', express.static('./app/public/stylesheets'));

LoginStrategy(passport);
SignupStrategy(passport);

// Express
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

// Passport
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', appRouter);
app.use('/', authRouter);

app.listen(3000, function () {
	console.log('Hello World listening on port 3000!');
});
