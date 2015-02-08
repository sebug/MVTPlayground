// Generated by psc-make version 0.6.2
"use strict";
var Data_Identity = require("Data.Identity");
var Control_Monad_Reader_Trans = require("Control.Monad.Reader.Trans");
var Prelude = require("Prelude");
var withReader = Control_Monad_Reader_Trans.withReaderT;
var runReader = function (m) {
    return Prelude["<<<"](Prelude.semigroupoidArr)(Data_Identity.runIdentity)(Control_Monad_Reader_Trans.runReaderT(m));
};
var mapReader = function (f) {
    return Control_Monad_Reader_Trans.mapReaderT(Prelude["<<<"](Prelude.semigroupoidArr)(Data_Identity.Identity.create)(Prelude["<<<"](Prelude.semigroupoidArr)(f)(Data_Identity.runIdentity)));
};
module.exports = {
    mapReader: mapReader, 
    runReader: runReader, 
    withReader: withReader
};