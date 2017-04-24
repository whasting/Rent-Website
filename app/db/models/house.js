'use strict';

module.exports = function(sequelize, DataTypes) {
    let House = sequelize.define('House', {
        name: {
            type: DataTypes.STRING,
        },
        members: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
        },
    }, {
        tableName: 'houses',
        classMethods: {
            associate: function(models) {
                House.hasMany(models.Profile);
            },
        },
        instanceMethods: {
        }
    });
    return House;
};