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
    let memory = [];
    let temp = list;
    let i = 0;
    
    while (temp != null) {
        memory[i] = temp.value;
        temp = temp.next;
        i++;
    };

    for (i = i - 1; (i) >= 0; i--) alert(memory[i]);
}

printList(list);