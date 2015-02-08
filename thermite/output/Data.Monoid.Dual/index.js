// Generated by psc-make version 0.6.2
"use strict";
var Prelude = require("Prelude");
var Data_Monoid = require("Data.Monoid");
var Dual = {
    create: function (value) {
        return value;
    }
};
var showDual = function (__dict_Show_0) {
    return new Prelude.Show(function (_69) {
        return "Dual (" + (Prelude.show(__dict_Show_0)(_69) + ")");
    });
};
var semigroupDual = function (__dict_Semigroup_1) {
    return new Prelude.Semigroup(function (_70) {
        return function (_71) {
            return Prelude["<>"](__dict_Semigroup_1)(_71)(_70);
        };
    });
};
var runDual = function (_62) {
    return _62;
};
var monoidDual = function (__dict_Monoid_3) {
    return new Data_Monoid.Monoid(function () {
        return semigroupDual(__dict_Monoid_3["__superclass_Prelude.Semigroup_0"]());
    }, Data_Monoid.mempty(__dict_Monoid_3));
};
var eqDual = function (__dict_Eq_4) {
    return new Prelude.Eq(function (_65) {
        return function (_66) {
            return Prelude["/="](__dict_Eq_4)(_65)(_66);
        };
    }, function (_63) {
        return function (_64) {
            return Prelude["=="](__dict_Eq_4)(_63)(_64);
        };
    });
};
var ordDual = function (__dict_Ord_2) {
    return new Prelude.Ord(function () {
        return eqDual(__dict_Ord_2["__superclass_Prelude.Eq_0"]());
    }, function (_67) {
        return function (_68) {
            return Prelude.compare(__dict_Ord_2)(_67)(_68);
        };
    });
};
module.exports = {
    Dual: Dual, 
    eqDual: eqDual, 
    monoidDual: monoidDual, 
    ordDual: ordDual, 
    runDual: runDual, 
    semigroupDual: semigroupDual, 
    showDual: showDual
};