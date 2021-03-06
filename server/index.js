/* eslint-env node */
//'use strict';

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };
const bodyParser= require("body-parser");

module.exports = function(app) {
  app.use(bodyParser.urlencoded({extended:true}));
  app.post('/token',function(req,res){
    if(req.body.username == "muthu" && req.body.password == "pass"){
      res.send({access_token:"malai"})
    }else{
      res.status(400).send({error:"invalid"+ req.body.password + req.body.usernsme})
    }
  });

  app.use(bodyParser.urlencoded({extended:true}));

  app.get('/api/students',function(req,res){

    if(req.headers.authorization != "malai"){
      return res.status(401).send("Unauthorized");
    }
    return res.status(200).send({
      students:[
        {id:1,name:"malai", age:27},
        {id:2,name:"muthu", age:27}
      ]
    })
  })
};
