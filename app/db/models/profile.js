'use strict';

module.exports = function(sequelize, DataTypes) {
    let Profile = sequelize.define('Profile', {
        name: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'profiles',
        classMethods: {
            associate: function(models) {
                Profile.belongsTo(models.User);
                // Profile.belongsTo(models.House);
            },
        },
        instanceMethods: {
        }
    });
    return Profile;
};