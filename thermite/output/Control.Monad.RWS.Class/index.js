// Generated by psc-make version 0.6.2
"use strict";
var Prelude = require("Prelude");
var Control_Monad_RWS_Trans = require("Control.Monad.RWS.Trans");
var Control_Monad_Reader_Class = require("Control.Monad.Reader.Class");
var Control_Monad_Writer_Class = require("Control.Monad.Writer.Class");
var Control_Monad_State_Class = require("Control.Monad.State.Class");
var Control_Monad_Maybe_Trans = require("Control.Monad.Maybe.Trans");
var Control_Monad_Error_Trans = require("Control.Monad.Error.Trans");
function MonadRWS(__superclass_Control$dotMonad$dotReader$dotClass$dotMonadReader_2, __superclass_Control$dotMonad$dotState$dotClass$dotMonadState_4, __superclass_Control$dotMonad$dotWriter$dotClass$dotMonadWriter_3, __superclass_Data$dotMonoid$dotMonoid_1, __superclass_Prelude$dotMonad_0) {
    this["__superclass_Control.Monad.Reader.Class.MonadReader_2"] = __superclass_Control$dotMonad$dotReader$dotClass$dotMonadReader_2;
    this["__superclass_Control.Monad.State.Class.MonadState_4"] = __superclass_Control$dotMonad$dotState$dotClass$dotMonadState_4;
    this["__superclass_Control.Monad.Writer.Class.MonadWriter_3"] = __superclass_Control$dotMonad$dotWriter$dotClass$dotMonadWriter_3;
    this["__superclass_Data.Monoid.Monoid_1"] = __superclass_Data$dotMonoid$dotMonoid_1;
    this["__superclass_Prelude.Monad_0"] = __superclass_Prelude$dotMonad_0;
};
var monadRWSRWST = function (__dict_Monad_0) {
    return function (__dict_Monoid_1) {
        return new MonadRWS(function () {
            return Control_Monad_Reader_Class.monadReaderRWST(__dict_Monad_0)(__dict_Monoid_1);
        }, function () {
            return Control_Monad_State_Class.monadStateRWST(__dict_Monad_0)(__dict_Monoid_1);
        }, function () {
            return Control_Monad_Writer_Class.monadWriterRWST(__dict_Monad_0)(__dict_Monoid_1);
        }, function () {
            return __dict_Monoid_1;
        }, function () {
            return Control_Monad_RWS_Trans.monadRWST(__dict_Monad_0)(__dict_Monoid_1);
        });
    };
};
var monadRWSMaybeT = function (__dict_Monad_2) {
    return function (__dict_Monoid_3) {
        return function (__dict_MonadRWS_4) {
            return function (__dict_MonadReader_5) {
                return function (__dict_MonadWriter_6) {
                    return function (__dict_MonadState_7) {
                        return new MonadRWS(function () {
                            return Control_Monad_Reader_Class.monadReaderMaybeT(__dict_Monad_2)(__dict_MonadReader_5);
                        }, function () {
                            return Control_Monad_State_Class.monadStateMaybeT(__dict_Monad_2)(__dict_MonadState_7);
                        }, function () {
                            return Control_Monad_Writer_Class.monadWriterMaybeT(__dict_Monad_2)(__dict_MonadWriter_6);
                        }, function () {
                            return __dict_Monoid_3;
                        }, function () {
                            return Control_Monad_Maybe_Trans.monadMaybeT(__dict_Monad_2);
                        });
                    };
                };
            };
        };
    };
};
var monadRWSErrorT = function (__dict_Monad_8) {
    return function (__dict_Monoid_9) {
        return function (__dict_MonadRWS_10) {
            return function (__dict_MonadReader_11) {
                return function (__dict_MonadWriter_12) {
                    return function (__dict_MonadState_13) {
                        return function (__dict_Error_14) {
                            return new MonadRWS(function () {
                                return Control_Monad_Reader_Class.monadReaderErrorT(__dict_Monad_8)(__dict_Error_14)(__dict_MonadReader_11);
                            }, function () {
                                return Control_Monad_State_Class.monadStateErrorT(__dict_Monad_8)(__dict_Error_14)(__dict_MonadState_13);
                            }, function () {
                                return Control_Monad_Writer_Class.monadWriterErrorT(__dict_Monad_8)(__dict_Error_14)(__dict_MonadWriter_12);
                            }, function () {
                                return __dict_Monoid_9;
                            }, function () {
                                return Control_Monad_Error_Trans.monadErrorT(__dict_Monad_8)(__dict_Error_14);
                            });
                        };
                    };
                };
            };
        };
    };
};
module.exports = {
    MonadRWS: MonadRWS, 
    monadRWSErrorT: monadRWSErrorT, 
    monadRWSMaybeT: monadRWSMaybeT, 
    monadRWSRWST: monadRWSRWST
};
