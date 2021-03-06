// Generated by psc-make version 0.6.2
"use strict";
var Data_Foreign = require("Data.Foreign");
var Prelude = require("Prelude");
var Data_Either = require("Data.Either");
var Data_Maybe = require("Data.Maybe");
var Null = {
    create: function (value) {
        return value;
    }
};
var runNull = function (_11) {
    return _11;
};
var readNull = function (_12) {
    return function (_13) {
        if (Data_Foreign.isNull(_13)) {
            return Prelude.pure(Data_Either.applicativeEither)(Data_Maybe.Nothing.value);
        };
        return Prelude["<$>"](Data_Either.functorEither)(Prelude["<<<"](Prelude.semigroupoidArr)(Null.create)(Data_Maybe.Just.create))(_12(_13));
    };
};
module.exports = {
    Null: Null, 
    readNull: readNull, 
    runNull: runNull
};
