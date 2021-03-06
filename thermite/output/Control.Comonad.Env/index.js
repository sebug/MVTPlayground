// Generated by psc-make version 0.6.2
"use strict";
var Data_Identity = require("Data.Identity");
var Control_Comonad_Env_Trans = require("Control.Comonad.Env.Trans");
var Prelude = require("Prelude");
var Data_Tuple = require("Data.Tuple");
var withEnv = Control_Comonad_Env_Trans.withEnvT;
var runEnv = function (x) {
    return Prelude["<$>"](Data_Tuple.functorTuple)(Data_Identity.runIdentity)(Control_Comonad_Env_Trans.runEnvT(x));
};
var mapEnv = Prelude["<$>"](Control_Comonad_Env_Trans.functorEnvT(Data_Identity.functorIdentity));
var env = function (e) {
    return function (a) {
        return Control_Comonad_Env_Trans.EnvT.create(Data_Tuple.Tuple.create(e)(a));
    };
};
module.exports = {
    env: env, 
    mapEnv: mapEnv, 
    runEnv: runEnv, 
    withEnv: withEnv
};
