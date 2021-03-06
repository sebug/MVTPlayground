// Generated by psc-make version 0.6.2
"use strict";
var Prelude = require("Prelude");
var Data_Monoid = require("Data.Monoid");
var Sum = {
    create: function (value) {
        return value;
    }
};
var showSum = new Prelude.Show(function (_92) {
    return "Sum (" + (Prelude.show(Prelude.showNumber)(_92) + ")");
});
var semigroupSum = new Prelude.Semigroup(function (_93) {
    return function (_94) {
        return _93 + _94;
    };
});
var runSum = function (_85) {
    return _85;
};
var monoidSum = new Data_Monoid.Monoid(function () {
    return semigroupSum;
}, 0);
var eqSum = new Prelude.Eq(function (_88) {
    return function (_89) {
        return _88 !== _89;
    };
}, function (_86) {
    return function (_87) {
        return _86 === _87;
    };
});
var ordSum = new Prelude.Ord(function () {
    return eqSum;
}, function (_90) {
    return function (_91) {
        return Prelude.compare(Prelude.ordNumber)(_90)(_91);
    };
});
module.exports = {
    Sum: Sum, 
    eqSum: eqSum, 
    monoidSum: monoidSum, 
    ordSum: ordSum, 
    runSum: runSum, 
    semigroupSum: semigroupSum, 
    showSum: showSum
};
