"use strict";

function showCircle(cx, cy, radius) {
    return new Promise(function(resolve) {
        let div = document.createElement('div');
        div.classList.add("circle");
        div.style.width = 0;
        div.style.height = 0;
        div.style.left = cx + 'px';
        div.style.top = cy + 'px';
        document.body.append(div);
    
        setTimeout( () => {
            div.style.width = radius * 2 + "px";
            div.style.height = radius * 2 + "px";
    
            div.addEventListener('transitionend', () => {
                resolve(div);
            }, { once: true });
        }, 0 );
    });
    
    
    
}

showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });