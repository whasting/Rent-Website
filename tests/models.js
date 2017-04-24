var assert = require('chai').assert;
var env = 'test';
var config = require('../app/db/config.js')[env];
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var models = require('../app/db/models');


describe('Models', function() {

    describe('User', function() {
        beforeEach(function (done) {
            // TODO: Figure out why this doesn't always work
            sequelize.sync({force: true, logging: console.log})
                .then(function() {
                    done(null);
                })
                .catch(function(err) {
                    done(err);
                });
        });

        after(function(done) {
            models.User.drop().then(function() {
                done(null);
            }).catch(function(err) {
                done(err);
            });
        });
        it('should create a user', function(done) {
            // models.User.findOne({where: {username: 'arthas'}}).then(function(user) {
            //     console.log('fuck', user.username);
            // });
            models.User.create({
                username: 'arthas',
                email: 'arthas@menethil.com',
                password: 'frostmourne69',
                isAdmin: true,
            }).then(function(user) {
                assert.equal('arthas', user.username);
                assert.equal('arthas@menethil.com', user.email);
                assert.equal(true, user.isAdmin);
                done(null);

            }).catch(function(err) {
                done(err);
            });
        });
        it('should find a user', function(done) {
            models.User.findOne({where: {
                username: 'arthas'
            }}).then(function(user) {
                assert.equal('arthas', user.username);
                assert.equal('arthas@menethil.com', user.email);
                done(null);
            }).catch(function(err) {
                done(err);
            });
        });
    });
});