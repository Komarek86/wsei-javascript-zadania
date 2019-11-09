
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//FUNKCJA DO SORTOWANIA TABLICY
function sortArray() {

    //PRZYPISANIE WARTOSCI DO TABLICY
    var points = [41, 3, 6, 1, 114, 54, 64];

    //SORTOWANIE OD NAJMNIEJSZEJ DO NAJWIEKSZEJ
    points.sort(function (a, b) {
        //POROWNANIE DWOCH ELEM. TABLICY - MNIEJSZY STAWIA PO LEWEJ, WIEKSZY PO PRAWEJ
        return a - b;
    });

    //ZWROCENIE POSORTOWANEJ TABLICY
    return points;
}

//WYWOLANIE FUNKCJI SORTUJACEJ TABLICE
sortArray();
