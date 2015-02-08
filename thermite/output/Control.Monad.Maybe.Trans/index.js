// Generated by psc-make version 0.6.2
"use strict";
var Prelude = require("Prelude");
var Control_Monad_Trans = require("Control.Monad.Trans");
var Data_Maybe = require("Data.Maybe");
var Data_Tuple = require("Data.Tuple");
var MaybeT = {
    create: function (value) {
        return value;
    }
};
var runMaybeT = function (_149) {
    return _149;
};
var monadTransMaybeT = new Control_Monad_Trans.MonadTrans(function (__dict_Monad_0) {
    return Prelude["<<<"](Prelude.semigroupoidArr)(MaybeT.create)(Prelude.liftM1(__dict_Monad_0)(Data_Maybe.Just.create));
});
var mapMaybeT = function (f) {
    return Prelude["<<<"](Prelude.semigroupoidArr)(MaybeT.create)(Prelude["<<<"](Prelude.semigroupoidArr)(f)(runMaybeT));
};
var liftPassMaybe = function (__dict_Monad_2) {
    return function (pass) {
        return mapMaybeT(function (m) {
            return pass(Prelude[">>="](__dict_Monad_2["__superclass_Prelude.Bind_1"]())(m)(function (_7) {
                return Prelude["return"](__dict_Monad_2)((function () {
                    if (_7 instanceof Data_Maybe.Nothing) {
                        return new Data_Tuple.Tuple(Data_Maybe.Nothing.value, Prelude.id(Prelude.categoryArr));
                    };
                    if (_7 instanceof Data_Maybe.Just) {
                        return new Data_Tuple.Tuple(new Data_Maybe.Just(_7.value0.value0), _7.value0.value1);
                    };
                    throw new Error("Failed pattern match");
                })());
            }));
        });
    };
};
var liftListenMaybe = function (__dict_Monad_3) {
    return function (listen) {
        return mapMaybeT(function (m) {
            return Prelude[">>="](__dict_Monad_3["__superclass_Prelude.Bind_1"]())(listen(m))(function (_6) {
                return Prelude["return"](__dict_Monad_3)(Prelude["<$>"](Data_Maybe.functorMaybe)(function (r) {
                    return new Data_Tuple.Tuple(r, _6.value1);
                })(_6.value0));
            });
        });
    };
};
var liftCatchMaybe = function ($$catch) {
    return function (m) {
        return function (h) {
            return MaybeT.create($$catch(runMaybeT(m))(Prelude["<<<"](Prelude.semigroupoidArr)(runMaybeT)(h)));
        };
    };
};
var liftCallCCMaybe = function (callCC) {
    return function (f) {
        return MaybeT.create(callCC(function (c) {
            return runMaybeT(f(function (a) {
                return MaybeT.create(c(new Data_Maybe.Just(a)));
            }));
        }));
    };
};
var monadMaybeT = function (__dict_Monad_1) {
    return new Prelude.Monad(function () {
        return applicativeMaybeT(__dict_Monad_1);
    }, function () {
        return bindMaybeT(__dict_Monad_1);
    });
};
var functorMaybeT = function (__dict_Monad_4) {
    return new Prelude.Functor(Prelude.liftA1(applicativeMaybeT(__dict_Monad_4)));
};
var bindMaybeT = function (__dict_Monad_5) {
    return new Prelude.Bind(function (x) {
        return function (f) {
            return MaybeT.create(Prelude[">>="](__dict_Monad_5["__superclass_Prelude.Bind_1"]())(runMaybeT(x))(function (_5) {
                if (_5 instanceof Data_Maybe.Nothing) {
                    return Prelude["return"](__dict_Monad_5)(Data_Maybe.Nothing.value);
                };
                if (_5 instanceof Data_Maybe.Just) {
                    return runMaybeT(f(_5.value0));
                };
                throw new Error("Failed pattern match");
            }));
        };
    }, function () {
        return applyMaybeT(__dict_Monad_5);
    });
};
var applyMaybeT = function (__dict_Monad_6) {
    return new Prelude.Apply(Prelude.ap(monadMaybeT(__dict_Monad_6)), function () {
        return functorMaybeT(__dict_Monad_6);
    });
};
var applicativeMaybeT = function (__dict_Monad_7) {
    return new Prelude.Applicative(function () {
        return applyMaybeT(__dict_Monad_7);
    }, Prelude["<<<"](Prelude.semigroupoidArr)(MaybeT.create)(Prelude["<<<"](Prelude.semigroupoidArr)(Prelude.pure(__dict_Monad_7["__superclass_Prelude.Applicative_0"]()))(Data_Maybe.Just.create)));
};
module.exports = {
    MaybeT: MaybeT, 
    applicativeMaybeT: applicativeMaybeT, 
    applyMaybeT: applyMaybeT, 
    bindMaybeT: bindMaybeT, 
    functorMaybeT: functorMaybeT, 
    liftCallCCMaybe: liftCallCCMaybe, 
    liftCatchMaybe: liftCatchMaybe, 
    liftListenMaybe: liftListenMaybe, 
    liftPassMaybe: liftPassMaybe, 
    mapMaybeT: mapMaybeT, 
    monadMaybeT: monadMaybeT, 
    monadTransMaybeT: monadTransMaybeT, 
    runMaybeT: runMaybeT
};
