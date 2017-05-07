const models = require('./app/db/models');
const bcrypt = require('bcrypt-nodejs');

// Dev superuser credentials
const EMAIL = 'root@root.com';
const PASSWORD = bcrypt.hashSync('root', bcrypt.genSaltSync(8), null);

module.exports.createSuperUser = function() {
    models.User
        .create({
            email: EMAIL,
            password: PASSWORD,
            isAdmin: true,
        })
        .catch(err => {
            console.log(err);
        });
}
