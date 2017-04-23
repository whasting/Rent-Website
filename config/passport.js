import { Strategy as LocalStrategy } from 'passport-local';
const models = require('../app/db/models');

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
        models.User.findById(id).then((err, user) => {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    }, function(req, username, password, done) {
        models.User.findOne({where: { 'username' :  username }}).then((user, err) => {
            // if there are any errors, return the error
            if (err)
                return done(err);

            if (user) {
                return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
            } else {
                // TODO: MAKE GENERATE HASH GET CALLED AT SOME OTHER POINT
                let newUser = models.User.create({
                    username: username,
                    password: password
                    // password: req.user.generatehash(password)
                });

                // save the user
                newUser.save().then((err) => {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });


    }));

    passport.use('local-login', new LocalStrategy({
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { // callback with email and password from our form
            models.User.findOne({where: {'username':  username}}).then((user) => {
                // if (err)
                //     return done(err);

                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

                // all is well, return successful user
                return done(null, user);
            });

        }));

};