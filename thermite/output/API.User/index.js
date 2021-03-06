// Generated by psc-make version 0.6.2
"use strict";
var Prelude = require("Prelude");
var Data_Foreign_Class = require("Data.Foreign.Class");
var Data_Either = require("Data.Either");
var Data_Foreign_Index = require("Data.Foreign.Index");
function User(value0) {
    this.value0 = value0;
};
User.create = function (value0) {
    return new User(value0);
};
function getCallImpl(url) {
     return function (onSuccess) {
          return function (onFailure) {
              return function () {
                 var xmlhttp;

                 if (window.XMLHttpRequest) {
                     xmlhttp = new XMLHttpRequest();
                 } else {
                     xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
                 }
                 xmlhttp.onreadystatechange = function () {
                     if (xmlhttp.readyState === 4 ) {
                       if(xmlhttp.status === 200){
                           onSuccess(xmlhttp.responseText)();
                       }
                       else {
                           onFailure(xmlhttp.status)();
                       }
                    }
                 };

                 xmlhttp.open('GET', url, true);
                 xmlhttp.send();
             };
          };
      };
  };
function postCallImpl(url) {
     return function (content) {
         return function (onSuccess) {
              return function (onFailure) {
                  return function () {
                     var xmlhttp,
                         payload;

                     if (window.XMLHttpRequest) {
                         xmlhttp = new XMLHttpRequest();
                     } else {
                         xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
                     }
                     xmlhttp.onreadystatechange = function () {
                         if (xmlhttp.readyState === 4 ) {
                           if(xmlhttp.status === 200){
                               onSuccess(xmlhttp.responseText);
                           }
                           else {
                               onFailure(xmlhttp.status);
                           }
                        }
                     };
                     payload = content;

                     xmlhttp.open('POST', url, true);
                     xmlhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                     xmlhttp.send(payload);

                     return content;
                  }
              };
          };
     };
  };
function stringifyUser(u) {
           return JSON.stringify({
             FirstName: u.value0.firstName,
             Name: u.value0.name,
             Address: u.value0.address,
             Age: u.value0.age
           });
       };
var userIsForeign = new Data_Foreign_Class.IsForeign(function (value) {
    return Prelude[">>="](Data_Either.bindEither)(Data_Foreign_Class.readProp(Data_Foreign_Class.stringIsForeign)(Data_Foreign_Index.indexString)("FirstName")(value))(function (_3) {
        return Prelude[">>="](Data_Either.bindEither)(Data_Foreign_Class.readProp(Data_Foreign_Class.stringIsForeign)(Data_Foreign_Index.indexString)("Name")(value))(function (_2) {
            return Prelude[">>="](Data_Either.bindEither)(Data_Foreign_Class.readProp(Data_Foreign_Class.stringIsForeign)(Data_Foreign_Index.indexString)("Address")(value))(function (_1) {
                return Prelude[">>="](Data_Either.bindEither)(Data_Foreign_Class.readProp(Data_Foreign_Class.numberIsForeign)(Data_Foreign_Index.indexString)("Age")(value))(function (_0) {
                    return Prelude["return"](Data_Either.monadEither)(new User({
                        firstName: _3, 
                        name: _2, 
                        address: _1, 
                        age: _0
                    }));
                });
            });
        });
    });
});
var postCall = function (url) {
    return function (content) {
        return function (k) {
            return postCallImpl(url)(content)(Prelude["<<<"](Prelude.semigroupoidArr)(k)(Data_Either.Right.create))(Prelude["<<<"](Prelude.semigroupoidArr)(k)(Data_Either.Left.create));
        };
    };
};
var saveUser = function (u) {
    return postCall("/User/SaveUser")(stringifyUser(u));
};
var parseUser = function (content) {
    return Data_Foreign_Class.readJSON(userIsForeign)(content);
};
var getCall = function (url) {
    return function (k) {
        return getCallImpl(url)(Prelude["<<<"](Prelude.semigroupoidArr)(k)(Data_Either.Right.create))(Prelude["<<<"](Prelude.semigroupoidArr)(k)(Data_Either.Left.create));
    };
};
var loadUser = function (_4) {
    return getCall("/User/LoadUser");
};
module.exports = {
    User: User, 
    getCall: getCall, 
    getCallImpl: getCallImpl, 
    loadUser: loadUser, 
    parseUser: parseUser, 
    postCall: postCall, 
    postCallImpl: postCallImpl, 
    saveUser: saveUser, 
    stringifyUser: stringifyUser, 
    userIsForeign: userIsForeign
};
