// Generated by psc-make version 0.6.2
"use strict";
var Prelude = require("Prelude");
function Error(noMsg, strMsg) {
    this.noMsg = noMsg;
    this.strMsg = strMsg;
};
var strMsg = function (dict) {
    return dict.strMsg;
};
var noMsg = function (dict) {
    return dict.noMsg;
};
var errorString = new Error("", Prelude.id(Prelude.categoryArr));
module.exports = {
    Error: Error, 
    errorString: errorString, 
    noMsg: noMsg, 
    strMsg: strMsg
};
