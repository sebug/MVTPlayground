// Generated by psc-make version 0.6.2
"use strict";
var Thermite = require("Thermite");
var Thermite_Html_Elements = require("Thermite.Html.Elements");
var Thermite_Html = require("Thermite.Html");
var Thermite_Html_Attributes = require("Thermite.Html.Attributes");
var Thermite_Events = require("Thermite.Events");
var Prelude = require("Prelude");
var Thermite_Action = require("Thermite.Action");
var Control_Monad_Cont_Trans = require("Control.Monad.Cont.Trans");
var API_User = require("API.User");
var Debug_Trace = require("Debug.Trace");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Data_Either = require("Data.Either");
function SetFirstName(value0) {
    this.value0 = value0;
};
SetFirstName.create = function (value0) {
    return new SetFirstName(value0);
};
function SaveUser() {

};
SaveUser.value = new SaveUser();
function LoadUser() {

};
LoadUser.value = new LoadUser();
function getValue(e) {  return e.target.value;};
var performAction = function (_4) {
    return function (_5) {
        if (_5 instanceof LoadUser) {
            return Thermite_Action.modifyState(function (st) {
                return {
                    firstName: st.firstName
                };
            });
        };
        if (_5 instanceof SaveUser) {
            return Thermite_Action.modifyState(function (st) {
                return {
                    firstName: st.firstName
                };
            });
        };
        if (_5 instanceof SetFirstName) {
            return Thermite_Action.modifyState(function (st) {
                return {
                    firstName: _5.value0
                };
            });
        };
        throw new Error("Failed pattern match");
    };
};
var initialState = {
    firstName: "Blubb"
};
var handleChangeEvent = function (e) {
    return new SetFirstName(getValue(e));
};
var render = function (_1) {
    return function (_2) {
        return function (_3) {
            return Thermite_Html_Elements["div'"]([ Thermite_Html_Elements["div'"]([ Thermite_Html.text("First name"), Thermite_Html_Elements.input([ Thermite_Html_Attributes.value(_2.firstName), Thermite_Events.onChange(_1)(handleChangeEvent) ])([  ]) ]), Thermite_Html_Elements.button([ Thermite_Events.onClick(_1)(Prelude["const"](SaveUser.value)) ])([ Thermite_Html.text("Save User") ]) ]);
        };
    };
};
var spec = Thermite.componentWillMount(LoadUser.value)(Thermite.simpleSpec(initialState)(performAction)(render));
var main = (function () {
    var cl = Thermite.createClass(spec);
    return function __do() {
        Thermite.render(cl)(Prelude.unit)();
        return Control_Monad_Cont_Trans.runContT(API_User.loadTransformSave("/Home/LoadUser")("http://localhost:5004/User/SaveUser"))(Debug_Trace.print(Data_Either.showEither(Prelude.showString)(Prelude.showString)))();
    };
})();
module.exports = {
    LoadUser: LoadUser, 
    SaveUser: SaveUser, 
    SetFirstName: SetFirstName, 
    getValue: getValue, 
    handleChangeEvent: handleChangeEvent, 
    initialState: initialState, 
    main: main, 
    performAction: performAction, 
    render: render, 
    spec: spec
};
