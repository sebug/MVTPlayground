// Generated by psc-make version 0.6.2
"use strict";
var Thermite = require("Thermite");
var Thermite_Html_Elements = require("Thermite.Html.Elements");
var Thermite_Html = require("Thermite.Html");
var Thermite_Html_Attributes = require("Thermite.Html.Attributes");
var Thermite_Events = require("Thermite.Events");
var Prelude = require("Prelude");
var Thermite_Action = require("Thermite.Action");
var Debug_Trace = require("Debug.Trace");
var Control_Monad_Eff = require("Control.Monad.Eff");
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
var performAction = function (_3) {
    return function (_4) {
        if (_4 instanceof LoadUser) {
            return Thermite_Action.modifyState(function (st) {
                return {
                    firstName: st.firstName
                };
            });
        };
        if (_4 instanceof SaveUser) {
            return Thermite_Action.modifyState(function (st) {
                return {
                    firstName: st.firstName
                };
            });
        };
        if (_4 instanceof SetFirstName) {
            return Thermite_Action.modifyState(function (st) {
                return {
                    firstName: _4.value0
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
var render = function (_0) {
    return function (_1) {
        return function (_2) {
            return Thermite_Html_Elements["div'"]([ Thermite_Html_Elements["div'"]([ Thermite_Html.text("First name"), Thermite_Html_Elements.input([ Thermite_Html_Attributes.value(_1.firstName), Thermite_Events.onChange(_0)(handleChangeEvent) ])([  ]) ]), Thermite_Html_Elements.button([ Thermite_Events.onClick(_0)(Prelude["const"](SaveUser.value)) ])([ Thermite_Html.text("Save User") ]) ]);
        };
    };
};
var spec = Thermite.componentWillMount(LoadUser.value)(Thermite.simpleSpec(initialState)(performAction)(render));
var main = (function () {
    var cl = Thermite.createClass(spec);
    return function __do() {
        Thermite.render(cl)(Prelude.unit)();
        return Debug_Trace.trace("Hai")();
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
