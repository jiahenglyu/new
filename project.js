/*
** Jiaheng Lyu
** February 27, 2020
** CS290
*/


var number = 1;
press(number);
aut();

function currentDiv(n) {
    press(number = n);
}

function plusDivs(n) {
    press(number += n);
}

function press(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { number = 1 }
    if (n < 1) { number = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[number - 1].style.display = "block";

}

function aut() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    if (number > x.length) { number = 1 }
    x[number - 1].style.display = "block";
    number++;
    setTimeout(aut, 3000);
}