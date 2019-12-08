//ZAD 0
var car = {
    brand:'Subaru  ',
    color:'Niebieskie ',
    numberOfKilometers: 0,
    printCarinfo: function(){ 
        console.log(this.brand,this.color,this.numberOfKilometers);},
        drive: function(km){console.log(this.numberOfKilometers+=km)}
}
car.printCarinfo();
car.drive(20);
car.printCarinfo(); 

//ZAD 1

car.review =[
'2017-04-20',
'2018-04-20',
'2019-04-20'];
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