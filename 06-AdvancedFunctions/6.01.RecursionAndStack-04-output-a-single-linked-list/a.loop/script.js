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
  let temp = list;
  
  while (temp != null) {
    alert(temp.value);
    temp = temp.next;
  };
}

printList(list);