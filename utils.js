'use strict';

// Get HTML element by id
export function getElementById(selector, scope = document) {
    return scope.getElementById(sel);
  }
  
  // Select HTML element
  export function select(selector, scope = document) {
    return scope.querySelector(sel);
  }
  
  // Get a list of HTML elements as an array
  export function selectAllEl(selector, scope = document) {
    return [...scope.querySelectorAll(sel)];
  }

  export function print(...args) {
    args.forEach(element => {
        console.log(element);
      });
  }
