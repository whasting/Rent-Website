import { Strategy as LocalStrategy } from 'passport-local';
const models = require('../app/db/models');
const bcrypt = require('bcrypt-nodejs');

module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        models.User.findById(id).then(function (user) {
            done(null, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    }, function(req, email, password, done) {
        models.User.findOne({where: { 'email' :  email }}).then((user, err) => {
            // if there are any errors, return the error
            if (err)
                return done(err);

            if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {
                let password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
                models.User
                    .create({
                        email: email,
                        password: password,
                        isAdmin: false,
                    })
                    .then((user) => {
                        return done(null, user);
                    })
                    .catch(err => {
                        return done(err);
                    });
            }

        });


    }));

    passport.use('local-login', new LocalStrategy({
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) { // callback with email and password from our form
            models.User.findOne({where: {'email':  email}}).then((user) => {

                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

                // all is well, return successful user
                return done(null, user);
            })
                .catch(err => {
                    return done(err);
                });

        }));
};
