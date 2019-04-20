const swag = require("../models/swag")

module.exports = {
    search: (req,res) => {
        const {category} = req.query;
        console.log(category)

        if(!category) {
            res.status(200).json(swag)
        } else{
            const filtered = swag.filter(element => element.category == category)
            res.status(200).json(filtered);
        }
    }
}