var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
const user = require('../model/user');

/* GET users listing. */
router.post('/register',  async function(req, res, next) {
  let users = []

  try{
    hashPassword(req.body.password).then((function(hash)
    {
      users.push({
      id: Date.now().toString(),
      name: req.body.name,
      password: hash
    })
    console.log(users)
    }))
    
    
  
  }catch{
    res.redirect('/register')
  }
 
});

async function hashPassword (pass) {

  const password = pass
  const saltRounds = 10;

  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function(err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })

  return hashedPassword
}

router.post('/login', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
