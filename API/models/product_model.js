const db = require('../database');

const product = {
    getProduct: function(id, callback) {
        return db.query('SELECT * FROM foodMenu WHERE foodID=?',[id].callback);
    }
};
module.exports = product;
