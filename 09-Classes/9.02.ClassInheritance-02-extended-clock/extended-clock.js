"use strict";

class ExtendedClock extends Clock {
    constructor({template, precision}) {
        super({template});
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}


let preciseClock = new ExtendedClock ( {template: "h:m:s", precision: 2000} );
preciseClock.start();