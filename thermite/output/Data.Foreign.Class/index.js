// Generated by psc-make version 0.6.2
"use strict";
var Prelude = require("Prelude");
var Data_Foreign = require("Data.Foreign");
var Data_Traversable = require("Data.Traversable");
var Data_Array = require("Data.Array");
var Data_Foreign_Null = require("Data.Foreign.Null");
var Data_Foreign_Undefined = require("Data.Foreign.Undefined");
var Data_Foreign_NullOrUndefined = require("Data.Foreign.NullOrUndefined");
var Data_Either = require("Data.Either");
var Data_Foreign_Index = require("Data.Foreign.Index");
function IsForeign(read) {
    this.read = read;
};
var stringIsForeign = new IsForeign(Data_Foreign.readString);
var read = function (dict) {
    return dict.read;
};
var readJSON = function (__dict_IsForeign_0) {
    return function (json) {
        return Prelude[">>="](Data_Either.bindEither)(Data_Foreign.parseJSON(json))(read(__dict_IsForeign_0));
    };
};
var readWith = function (__dict_IsForeign_1) {
    return function (f) {
        return function (value) {
            return Data_Either.either(Prelude["<<<"](Prelude.semigroupoidArr)(Data_Either.Left.create)(f))(Data_Either.Right.create)(read(__dict_IsForeign_1)(value));
        };
    };
};
var readProp = function (__dict_IsForeign_2) {
    return function (__dict_Index_3) {
        return function (prop) {
            return function (value) {
                return Prelude[">>="](Data_Either.bindEither)(Data_Foreign_Index["!"](__dict_Index_3)(value)(prop))(readWith(__dict_IsForeign_2)(Data_Foreign_Index.errorAt(__dict_Index_3)(prop)));
            };
        };
    };
};
var undefinedIsForeign = function (__dict_IsForeign_4) {
    return new IsForeign(Data_Foreign_Undefined.readUndefined(read(__dict_IsForeign_4)));
};
var numberIsForeign = new IsForeign(Data_Foreign.readNumber);
var nullOrUndefinedIsForeign = function (__dict_IsForeign_5) {
    return new IsForeign(Data_Foreign_NullOrUndefined.readNullOrUndefined(read(__dict_IsForeign_5)));
};
var nullIsForeign = function (__dict_IsForeign_6) {
    return new IsForeign(Data_Foreign_Null.readNull(read(__dict_IsForeign_6)));
};
var foreignIsForeign = new IsForeign(function (f) {
    return Prelude["return"](Data_Either.monadEither)(f);
});
var booleanIsForeign = new IsForeign(Data_Foreign.readBoolean);
var arrayIsForeign = function (__dict_IsForeign_7) {
    return new IsForeign(function (value) {
        var readElement = function (i) {
            return function (value_1) {
                return readWith(__dict_IsForeign_7)(Data_Foreign.ErrorAtIndex.create(i))(value_1);
            };
        };
        var readElements = function (arr) {
            return Data_Traversable.sequence(Data_Traversable.traversableArray)(Data_Either.applicativeEither)(Data_Array.zipWith(readElement)(Data_Array.range(0)(Data_Array.length(arr)))(arr));
        };
        return Prelude[">>="](Data_Either.bindEither)(Data_Foreign.readArray(value))(readElements);
    });
};
module.exports = {
    IsForeign: IsForeign, 
    arrayIsForeign: arrayIsForeign, 
    booleanIsForeign: booleanIsForeign, 
    foreignIsForeign: foreignIsForeign, 
    nullIsForeign: nullIsForeign, 
    nullOrUndefinedIsForeign: nullOrUndefinedIsForeign, 
    numberIsForeign: numberIsForeign, 
    read: read, 
    readJSON: readJSON, 
    readProp: readProp, 
    readWith: readWith, 
    stringIsForeign: stringIsForeign, 
    undefinedIsForeign: undefinedIsForeign
};
