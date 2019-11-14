var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

//1. BŁĄD Uncaught TypeError: Cannot read property 'classList' of null - ŁADUJE STRONĘ OD POCZĄTKU DO KOŃCA - PODCZAS URUCHOMIENIA SKRYPTU NIE ISTNIEJE #menu
//2. PO DODANU DOMContentLoaded SKRYPT WYKONUJE SIĘ PO ZAŁADOWANIU ELEMENTÓW DOM NA STRONIE
//3. BRAK RÓŻNICY