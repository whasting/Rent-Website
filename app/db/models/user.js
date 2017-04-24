'use strict';
const bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define('User', {
        username: {
            unique: true,
            type: DataTypes.STRING,
        },
        email: {
            unique: true,
            type: DataTypes.STRING,
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
            associate: function(models) {
                User.hasOne(models.Profile);
            },
        },
        instanceMethods: {
            validPassword: function(password) {
                return password === this.dataValues.password;
                // return bcrypt.compareSync(password, this.dataValues.password);
            },
            generateHash: function(password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            },
        }
    });
    return User;
};