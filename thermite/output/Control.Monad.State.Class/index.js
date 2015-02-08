// Generated by psc-make version 0.6.2
"use strict";
var Prelude = require("Prelude");
var Control_Monad_Trans = require("Control.Monad.Trans");
var Control_Monad_RWS = require("Control.Monad.RWS");
var Data_Tuple = require("Data.Tuple");
var Control_Monad_Writer_Trans = require("Control.Monad.Writer.Trans");
var Control_Monad_State_Trans = require("Control.Monad.State.Trans");
var Control_Monad_Reader_Trans = require("Control.Monad.Reader.Trans");
var Control_Monad_Maybe_Trans = require("Control.Monad.Maybe.Trans");
var Control_Monad_Error_Trans = require("Control.Monad.Error.Trans");
function MonadState(state) {
    this.state = state;
};
var state = function (dict) {
    return dict.state;
};
var put = function (__dict_Monad_0) {
    return function (__dict_MonadState_1) {
        return function (s) {
            return state(__dict_MonadState_1)(function (_) {
                return new Data_Tuple.Tuple(Prelude.unit, s);
            });
        };
    };
};
var monadStateWriterT = function (__dict_Monad_2) {
    return function (__dict_Monoid_3) {
        return function (__dict_MonadState_4) {
            return new MonadState(function (f) {
                return Control_Monad_Trans.lift(Control_Monad_Writer_Trans.monadTransWriterT(__dict_Monoid_3))(__dict_Monad_2)(state(__dict_MonadState_4)(f));
            });
        };
    };
};
var monadStateStateT1 = function (__dict_Monad_5) {
    return function (__dict_MonadState_6) {
        return new MonadState(function (f) {
            return Control_Monad_Trans.lift(Control_Monad_State_Trans.monadTransStateT)(__dict_Monad_5)(state(__dict_MonadState_6)(f));
        });
    };
};
var monadStateStateT = function (__dict_Monad_7) {
    return new MonadState(function (f) {
        return Control_Monad_State_Trans.StateT.create(Prelude["<<<"](Prelude.semigroupoidArr)(Prelude["return"](__dict_Monad_7))(f));
    });
};
var monadStateReaderT = function (__dict_Monad_8) {
    return function (__dict_MonadState_9) {
        return new MonadState(function (f) {
            return Control_Monad_Trans.lift(Control_Monad_Reader_Trans.monadTransReaderT)(__dict_Monad_8)(state(__dict_MonadState_9)(f));
        });
    };
};
var monadStateRWST = function (__dict_Monad_10) {
    return function (__dict_Monoid_11) {
        return new MonadState(Control_Monad_RWS.state(__dict_Monad_10["__superclass_Prelude.Applicative_0"]())(__dict_Monoid_11));
    };
};
var monadStateMaybeT = function (__dict_Monad_12) {
    return function (__dict_MonadState_13) {
        return new MonadState(function (f) {
            return Control_Monad_Trans.lift(Control_Monad_Maybe_Trans.monadTransMaybeT)(__dict_Monad_12)(state(__dict_MonadState_13)(f));
        });
    };
};
var monadStateErrorT = function (__dict_Monad_14) {
    return function (__dict_Error_15) {
        return function (__dict_MonadState_16) {
            return new MonadState(function (f) {
                return Control_Monad_Trans.lift(Control_Monad_Error_Trans.monadTransErrorT(__dict_Error_15))(__dict_Monad_14)(state(__dict_MonadState_16)(f));
            });
        };
    };
};
var modify = function (__dict_Monad_17) {
    return function (__dict_MonadState_18) {
        return function (f) {
            return state(__dict_MonadState_18)(function (s) {
                return new Data_Tuple.Tuple(Prelude.unit, f(s));
            });
        };
    };
};
var gets = function (__dict_Monad_19) {
    return function (__dict_MonadState_20) {
        return function (f) {
            return state(__dict_MonadState_20)(function (s) {
                return new Data_Tuple.Tuple(f(s), s);
            });
        };
    };
};
var get = function (__dict_Monad_21) {
    return function (__dict_MonadState_22) {
        return state(__dict_MonadState_22)(function (s) {
            return new Data_Tuple.Tuple(s, s);
        });
    };
};
module.exports = {
    MonadState: MonadState, 
    get: get, 
    gets: gets, 
    modify: modify, 
    monadStateErrorT: monadStateErrorT, 
    monadStateMaybeT: monadStateMaybeT, 
    monadStateRWST: monadStateRWST, 
    monadStateReaderT: monadStateReaderT, 
    monadStateStateT: monadStateStateT, 
    monadStateStateT1: monadStateStateT1, 
    monadStateWriterT: monadStateWriterT, 
    put: put, 
    state: state
};
