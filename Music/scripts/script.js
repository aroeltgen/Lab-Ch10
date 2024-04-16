/*
 Author: Alexander Roeltgen
 Date: 4/16
 File Name: script.js
 */

 //Hamburger menu function
 function hamburger() {
 var menu = document.getElementById("menu-links");
 if (menu.style.display === "block") {
 menu.style.display = "none";
 } else {
 menu.style.display = "block";
 }
 }
