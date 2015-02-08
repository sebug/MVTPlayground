module API.User where

foreign import getCall
  "function getCall() {\
  \  var msg = 'Hello';\
  \  return msg;\
  \}" :: Unit -> String


