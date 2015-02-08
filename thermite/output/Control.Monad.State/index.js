// Generated by psc-make version 0.6.2
"use strict";
var Data_Identity = require("Data.Identity");
var Control_Monad_State_Trans = require("Control.Monad.State.Trans");
var Data_Tuple = require("Data.Tuple");
var Prelude = require("Prelude");
var withState = Control_Monad_State_Trans.withStateT;
var runState = function (s) {
    return Prelude["<<<"](Prelude.semigroupoidArr)(Data_Identity.runIdentity)(Control_Monad_State_Trans.runStateT(s));
};
var mapState = function (f) {
    return Control_Monad_State_Trans.mapStateT(Prelude["<<<"](Prelude.semigroupoidArr)(Data_Identity.Identity.create)(Prelude["<<<"](Prelude.semigroupoidArr)(f)(Data_Identity.runIdentity)));
};
var execState = function (m) {
    return function (s) {
        return Data_Tuple.snd(runState(m)(s));
    };
};
var evalState = function (m) {
    return function (s) {
        return Data_Tuple.fst(runState(m)(s));
    };
};
module.exports = {
    evalState: evalState, 
    execState: execState, 
    mapState: mapState, 
    runState: runState, 
    withState: withState
};
