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

let memory = [];
let i = 0;

function printList(list) {
    if (list.next != null) {
        printList(list.next);
    };

    alert(list.value);
}

printList(list);