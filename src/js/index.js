/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  function RandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let stick = "";
  let letter = "";

  let randonStick = RandomNum(1, 4);
  let randomLetter = RandomNum(1, 13);
  getLetter(randomLetter);
  getStick(randonStick);

  function getStick(num) {
    switch (num) {
      case 1:
        let hearts = document.querySelectorAll(".stick");

        hearts.forEach(function(Item) {
          Item.className = "heart";
          Item.innerHTML = "&#9829";
        });

        return (stick += "heart");
        break;
      case 2:
        let spades = document.querySelectorAll(".stick");

        spades.forEach(function(Item) {
          Item.className = "spade";
          Item.innerHTML = "&#9824";
        });
        return (stick += "spade");
        break;
      case 3:
        let clubs = document.querySelectorAll(".stick");

        for (let i = 0; i < clubs.length; i++) {
          clubs[i].className = "club";
          clubs[i].innerHTML = "&#9827";
        }

        return (stick += "club");
        break;
      case 4:
        let diamonds = document.querySelectorAll(".stick");

        for (let i = 0; i < diamonds.length; i++) {
          diamonds[i].className = "diamond";
          diamonds[i].innerHTML = "&#9830";
        }
        /* for (let diamond in diamonds) {
          //console.log(diamonds, "diamonds");
          console.log(diamonds[diamond], "diamondsdiamond");
          diamonds[diamond].classList.add("diamond");
          diamonds[diamond].innerHTML = "&#9830";
        } */

        return (stick += "diamond");
        break;
        return;
    } // fin switch
  } //fin funciton sticks

  function getLetter(num) {
    switch (num) {
      case 11:
        document.querySelector(".letter").innerHTML = "J";
        return (letter = "J");
        break;
      case 12:
        document.querySelector(".letter").innerHTML = "Q";
        return (letter = "Q");
        break;
      case 13:
        document.querySelector(".letter").innerHTML = "K";
        return (letter = "K");
        break;

      default:
        document.querySelector(".letter").innerHTML = num;
        return (letter = num);
    }
  }
};
