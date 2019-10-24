const _ =require('lodash') 

const {User} = require('../models/user')
const { authenticateUser } = require( '../middlewares/authentication')


//localhost:3005/users/register
module.exports.register = function (req, res) {
    const body = req.body
    const user = new User(body)
    user.save()
        .then(function (user) {
            res.json({user})
        })
            
        .catch(function (err) {
            res.send(err)
        })
}
module.exports.login = (req, res) => {
    const body = req.body;
    // console.log(body);
    // let user;
    User.findByCredentials(body.email, body.password)
      .then(userFound => {
        user=userFound
        return user.generateToken();
      })
      .then(token => {
        user = _.pick(user, ["_id", "username", "email"]);
        res.json({token,user});
        
      })
      .catch(err => {
        res.send(err);
      });
  };
  
  



                
        
        


module.exports.account = function (req, res) {
  const {user}=req
  // console.log("hii","uuuuuuuuuuuuuuuuuuuuuuuuuu")
  res.send(_.pick(user,["_id","username","email"]))
}
module.exports.logout = function (req, res) {
    const { user, token } = req
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
        .then(function () {
            res.send({ notice: 'Successfully logged out' })
        })
        .catch(function (err) {
            res.send(err)
        })
}