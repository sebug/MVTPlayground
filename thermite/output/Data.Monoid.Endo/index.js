// Generated by psc-make version 0.6.2
"use strict";
var Prelude = require("Prelude");
var Data_Monoid = require("Data.Monoid");
var Endo = {
    create: function (value) {
        return value;
    }
};
var semigroupEndo = new Prelude.Semigroup(function (_73) {
    return function (_74) {
        return Prelude["<<<"](Prelude.semigroupoidArr)(_73)(_74);
    };
});
var runEndo = function (_72) {
    return _72;
};
var monoidEndo = new Data_Monoid.Monoid(function () {
    return semigroupEndo;
}, Prelude.id(Prelude.categoryArr));
module.exports = {
    Endo: Endo, 
    monoidEndo: monoidEndo, 
    runEndo: runEndo, 
    semigroupEndo: semigroupEndo
};