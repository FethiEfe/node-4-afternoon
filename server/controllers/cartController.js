const swag = require("./../models/swag")

module.exports = {
    add: (req, res) =>{
        const {id} = req.params;
        
        const {user} = req.session;

        const index = user.cart.findIndex(element => element.id === id);
        
        if(index === -1) {
           
            const selected = swag.find(element => element.id ==id);
            
            user.cart.push(selected)
            user.total += selected.price
            
        }
        res.status(200).json(user)

    },
    Delete: (req, res) => {
        const {id} = req.params;
        const {user} = req.session;

        const index = user.cart.findIndex(element => element.id == id);
        const selected = swag.find(element => element.id == id);
        if(index !== -1){
            
            user.cart.splice(index,1)
            user.total -= selected.price
        }

        res.status(200).send(user);

    },
    checkout : (req,res) => {
        const { user } = req.session;
        user.cart = [];
        user.total = 0;

        res.status(200).send(user);
    }

}