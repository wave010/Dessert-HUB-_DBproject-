const { ensureAuthenticated } = require("../config/auth");

exports.getAddrecipe = ensureAuthenticated, (req, res ) => {
    res.render("addrecipe")
}