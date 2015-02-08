// Generated by psc-make version 0.6.2
"use strict";
var Data_Identity = require("Data.Identity");
var Control_Monad_Writer_Trans = require("Control.Monad.Writer.Trans");
var Data_Tuple = require("Data.Tuple");
var Prelude = require("Prelude");
var runWriter = Prelude["<<<"](Prelude.semigroupoidArr)(Data_Identity.runIdentity)(Control_Monad_Writer_Trans.runWriterT);
var mapWriter = function (f) {
    return Control_Monad_Writer_Trans.mapWriterT(Prelude["<<<"](Prelude.semigroupoidArr)(Data_Identity.Identity.create)(Prelude["<<<"](Prelude.semigroupoidArr)(f)(Data_Identity.runIdentity)));
};
var execWriter = function (m) {
    return Data_Tuple.snd(runWriter(m));
};
module.exports = {
    execWriter: execWriter, 
    mapWriter: mapWriter, 
    runWriter: runWriter
};