// Generated by psc-make version 0.6.2
"use strict";
var Data_Either = require("Data.Either");
var Prelude = require("Prelude");
var choice2 = Data_Either.either;
var choice3 = function (a) {
    return function (b) {
        return function (c) {
            return Data_Either.either(a)(choice2(b)(c));
        };
    };
};
var choice4 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return Data_Either.either(a)(choice3(b)(c)(d));
            };
        };
    };
};
var choice5 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return Data_Either.either(a)(choice4(b)(c)(d)(e));
                };
            };
        };
    };
};
var choice6 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return Data_Either.either(a)(choice5(b)(c)(d)(e)(f));
                    };
                };
            };
        };
    };
};
var choice7 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (g) {
                            return Data_Either.either(a)(choice6(b)(c)(d)(e)(f)(g));
                        };
                    };
                };
            };
        };
    };
};
var choice8 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (g) {
                            return function (h) {
                                return Data_Either.either(a)(choice7(b)(c)(d)(e)(f)(g)(h));
                            };
                        };
                    };
                };
            };
        };
    };
};
var choice9 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (g) {
                            return function (h) {
                                return function (i) {
                                    return Data_Either.either(a)(choice8(b)(c)(d)(e)(f)(g)(h)(i));
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var choice10 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (g) {
                            return function (h) {
                                return function (i) {
                                    return function (j) {
                                        return Data_Either.either(a)(choice9(b)(c)(d)(e)(f)(g)(h)(i)(j));
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
module.exports = {
    choice10: choice10, 
    choice2: choice2, 
    choice3: choice3, 
    choice4: choice4, 
    choice5: choice5, 
    choice6: choice6, 
    choice7: choice7, 
    choice8: choice8, 
    choice9: choice9
};
