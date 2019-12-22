/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//FUNKCJA ZEWN.
function jeden() {

    //ZMIENNA LOKALNA WE FUKNCJI JEDEN
    var zmienna1 = 1;

    //FUNCKA WEWN.
    function dwa() {

        //WYPISANIE W KONSOLI zmienna1 - ZADZIALA BO FUNKCJA WEWN. MA DOSTEP DO FUNKCJI ZEWN.
        console.log(zmienna1);

        //STWORZENIE I PRZYPISANIE WARTOSCI DO zmienna2 - FUNKCJA ZEWN. NIE MA DO NIEJ DOSTEPU
        var zmienna2 = 3;
    }

    //WYWOLANIE FUNKCJI WEWN. Z ZEWN.
    dwa();

    //WYPISANIE W KONSOLI zmienna2 - NIE ZADZIALA - ZMIENNA JEST POZA FUNKCJA 
    console.log(zmienna2)
}

//WYWOLANIE FUNKCJI ZEWN. I WEWN. - FUNKCJA ZEWN. WYWOLUJE FUNKCJE WEWN.
jeden()
