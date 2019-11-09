//ZAD 0
var car = {
    brand:'Chevrolet',
    color:'yellow',
    numberOfKilometers: 0,
    printCarinfo: function(){ console.log(this.brand,this.color,this.numberOfKilometers);},
    drive: function(km){console.log(this.numberOfKilometers+=km)}
}
car.printCarinfo();
car.drive(20);
car.printCarinfo(); 

//ZAD 1

car.review =[
'2017-01-01',
'2018-01-01',
'2019-01-01'];
car.addReview = function(date){
    this.review.push(date);
}
car.getReviews = function(){
    return this.review;
}

console.log(car.getReviews())

//ZAD 3

var stairs = {
    step: 0,
    up: function(){this.step++;},
    down: function(){this.step--},
    printStep: function(){console.log(this.step);}
}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep()