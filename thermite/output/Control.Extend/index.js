// Generated by psc-make version 0.6.2
"use strict";
var Prelude = require("Prelude");
function Extend($less$less$eq, __superclass_Prelude$dotFunctor_0) {
    this["<<="] = $less$less$eq;
    this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
};
var $less$less$eq = function (dict) {
    return dict["<<="];
};
var $eq$less$eq = function (__dict_Extend_0) {
    return function (f) {
        return function (g) {
            return function (w) {
                return f($less$less$eq(__dict_Extend_0)(g)(w));
            };
        };
    };
};
var $eq$greater$eq = function (__dict_Extend_1) {
    return function (f) {
        return function (g) {
            return function (w) {
                return g($less$less$eq(__dict_Extend_1)(f)(w));
            };
        };
    };
};
var $eq$greater$greater = function (__dict_Extend_2) {
    return function (w) {
        return function (f) {
            return $less$less$eq(__dict_Extend_2)(f)(w);
        };
    };
};
var extendArr = function (__dict_Semigroup_3) {
    return new Extend(function (f) {
        return function (g) {
            return function (w) {
                return f(function (w$prime) {
                    return g(Prelude["<>"](__dict_Semigroup_3)(w)(w$prime));
                });
            };
        };
    }, function () {
        return Prelude.functorArr;
    });
};
var duplicate = function (__dict_Extend_4) {
    return function (w) {
        return $less$less$eq(__dict_Extend_4)(Prelude.id(Prelude.categoryArr))(w);
    };
};
module.exports = {
    "<<=": $less$less$eq, 
    "=<=": $eq$less$eq, 
    "=>=": $eq$greater$eq, 
    "=>>": $eq$greater$greater, 
    Extend: Extend, 
    duplicate: duplicate, 
    extendArr: extendArr
};
