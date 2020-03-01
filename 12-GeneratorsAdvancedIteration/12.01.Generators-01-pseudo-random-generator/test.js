"use strict";

describe("pseudoRandom", () => {
    it("for 1 as seed firstly produces 16807", () => {
        let equasion = 1 * 16807 % 2147483647;
        let generator = pseudoRandom(1);

        assert.equal(generator.next().value, equasion);
    });

    it("for 1 as seed secondly produces 282475249", () => {
        let equasion = 16807 * 16807 % 2147483647;
        let generator = pseudoRandom(1);
        generator.next().value;

        assert.equal(generator.next().value, equasion);
    });

    it("for 1 as seed thirdly produces 282475249", () => {
        let equasion = 282475249 * 16807 % 2147483647;
        let generator = pseudoRandom(1);
        generator.next().value;
        generator.next().value;

        assert.equal(generator.next().value, equasion);
    });

    it("for the same seed returns same result", () => {
        let generator1 = pseudoRandom(999);
        let generator2 = pseudoRandom(999);

        assert.equal(generator1.next().value, generator2.next().value);
    });

});