'use strict';
const bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define('User', {
        email: {
            unique: true,
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
        },
    }, {
        tableName: 'users',
        classMethods: {
        },
        instanceMethods: {
            validPassword: function(password) {
                // return password === this.dataValues.password;
                return bcrypt.compareSync(password, this.dataValues.password);
            },
            generateHash: function(password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            },
        }
    });
    return User;
};