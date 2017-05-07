const models = require('./app/db/models');

// Superuser credentials
const EMAIL = 'root@root.com';
const PASSWORD = 'root';

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
