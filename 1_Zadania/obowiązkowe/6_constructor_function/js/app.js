function Basket(){
    this.products =[];
    this.sum=0;
}

Basket.prototype.addProduct = function(name,price){
    this.products.push({name,price});
    this.sum+=price;
}
Basket.prototype.showBasket = function(){
    console.log(this.products, this.sum);
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();