'use strict';
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
            }
        }
    });
};