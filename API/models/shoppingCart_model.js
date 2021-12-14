module.exports = function Cart (oldCart){
    this.products = oldCart.products || {};
    this.totalQuantity = oldCart.totalQuantity || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = function (product, id){
        let storedProduct = this.products[id];
        if(!storedProduct) {
            storedProduct = this.products[id] = {product: product, quantity: 0, price: 0};
        }
        storedProduct.quantity++;
        storedProduct.price = storedProduct.product.price * storedProduct.quantity;
        this.totalQuantity++;
        this.totalPrice += storedProduct.product.price;
    };

    this.removeItem = function (id){
        this.totalQuantity -= this.products[id].quantity;
        this.totalPrice -= this.products[id].price;
        delete this.products[id];
    };

    this.getProducts = function() {
        const array = [];
        for (let id in this.products){
            array.push(this.products[id]);
        }
        return array;
    };

};
