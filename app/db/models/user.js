'use strict';
const bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'users',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
        },
        instanceMethods: {
            validPassword: function(password) {
                return password === this.password;
                // return bcrypt.compareSync(password, this.password);
            },
            generateHash: function(password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            },
        }
    });
};