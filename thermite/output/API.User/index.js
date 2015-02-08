// Generated by psc-make version 0.6.2
"use strict";
var Prelude = require("Prelude");
var Data_Either = require("Data.Either");
function getCallImpl(url) {
     return function (onSuccess) {
          return function (onFailure) {
             var msg = 'Hello',
                 xmlhttp;

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

             xmlhttp.open('GET', url, true);
             xmlhttp.send();

             return msg;
          };
      };
  };
function postCallImpl(url) {
     return function (content) {
         return function (onSuccess) {
              return function (onFailure) {
                 var msg = 'Hello',
                     xmlhttp;

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

                 xmlhttp.open('POST', url, true);
                 xmlhttp.send();

                 return msg;
              };
          };
     };
  };
var postCall = function (url) {
    return function (content) {
        return function (k) {
            return postCallImpl(url)(content)(Prelude["<<<"](Prelude.semigroupoidArr)(k)(Data_Either.Right.create))(Prelude["<<<"](Prelude.semigroupoidArr)(k)(Data_Either.Left.create));
        };
    };
};
var getCall = function (url) {
    return function (k) {
        return getCallImpl(url)(Prelude["<<<"](Prelude.semigroupoidArr)(k)(Data_Either.Right.create))(Prelude["<<<"](Prelude.semigroupoidArr)(k)(Data_Either.Left.create));
    };
};
module.exports = {
    getCall: getCall, 
    getCallImpl: getCallImpl, 
    postCall: postCall, 
    postCallImpl: postCallImpl
};
