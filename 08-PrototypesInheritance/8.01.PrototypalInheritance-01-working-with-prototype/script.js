"use strict";

let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // ? (1) => true, from rabbit
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // ? (2) => null, from animal
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // ? (3) => undefined, because non-existant