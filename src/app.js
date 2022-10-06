/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const Numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const Palos = ["🔷", "♥️", "♠️", "♣️"];
  const htmlNumero = document.querySelector("#numero");
  const htmlPalo = document.querySelector("#palos");
  const htmlPalo1 = document.querySelector("#palos1");

  let ArrayAleatorio = array => {
    let numeroAleatorio = Math.floor(Math.random() * array.length);
    let resultado = array[numeroAleatorio];
    return resultado;
  };

  let numeroPalos = ArrayAleatorio(Palos);
  htmlNumero.innerHTML = ArrayAleatorio(Numeros);
  htmlPalo.innerHTML = numeroPalos;
  htmlPalo1.innerHTML = numeroPalos;
};
