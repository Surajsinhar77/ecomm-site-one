const controller =  require('../controller/user.controller');

module.exports=(app)=>{
    app.post('/register', controller.registerUser);
    app.post('/login', controller.login);
}