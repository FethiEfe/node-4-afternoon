const users = require("../models/users");
var id = 1;

 module.exports = {
     login : (req, res) => {
        const {username, password} = req.body
        const {session} = req;
        
        let user = users.find( element => element.username === username & element.password === password)
        if(user){
            session.user.username = user.username;
            res.status(200).send(session.user)
        }else {
            res.status(500).json({err:"Get out of here."})
        }
     },

     register : (req, res) => {
        const { session } = req;
        const {username, password } = req.body;

        users.push({id, username, password});
        id++;
        session.user.username = username;
        res.status(200).send(session.user);
    },

    signout : (req, res) => {
        req.session.destroy();
        res.status(200).send(req.session);
    },

    getUser: (req, res) => {
        const { session } = req;
        res.status(200).send(session.user);
    }
 }