// Generated by psc-make version 0.6.2
"use strict";
var Prelude_Unsafe = require("Prelude.Unsafe");
var Data_Array = require("Data.Array");
var Data_Maybe_Unsafe = require("Data.Maybe.Unsafe");
var Prelude = require("Prelude");
var tail = function (_45) {
    if (_45.length >= 1) {
        var _310 = _45.slice(1);
        return _310;
    };
    throw new Error("Failed pattern match");
};
var last = function (xs) {
    return xs[Data_Array.length(xs) - 1];
};
var init = Prelude["<<<"](Prelude.semigroupoidArr)(Data_Maybe_Unsafe.fromJust)(Data_Array.init);
var head = function (_44) {
    if (_44.length >= 1) {
        var _313 = _44.slice(1);
        return _44[0];
    };
    throw new Error("Failed pattern match");
};
module.exports = {
    head: head, 
    init: init, 
    last: last, 
    tail: tail
};
