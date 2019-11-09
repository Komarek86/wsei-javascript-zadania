sayHello();
function sayHello(){
    console.log('Cześć');
}
sayHello();

//DZIALA HOISTING - PRZENIESIENIE DEKLARACJI NA SAMA GORE, WIEC NIE MA ROZNICY CZY WYWOLANIE JEST PRZED CZY PO DEKLARACJI


//sayWelcome();
var sayWelcome = function() {
    console.log('Witaj');
}
sayWelcome();

//WYRAZENIA FUNKCYJNEGO NIE DA SIE WYWOLAC PRZED DEKLARACJA 