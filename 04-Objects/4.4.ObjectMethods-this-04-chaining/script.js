"use strict";

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
    return this;
  }
};

alert(ladder.step);
ladder.up()
alert(ladder);
//ladder.up().showStep().down().showStep().up().up().showStep();
//ladder.up().up().down().showStep();
//ladder.up().up().down().up().down().showStep();