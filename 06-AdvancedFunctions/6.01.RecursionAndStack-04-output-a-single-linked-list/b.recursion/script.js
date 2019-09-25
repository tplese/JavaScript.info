"use strict";

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(list) {
  if (!list.next) return list.value;  
  
  return list.value + " " + printList(list.next);
}

alert( printList(list) );