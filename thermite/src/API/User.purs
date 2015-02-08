module API.User where

import Control.Monad.Eff
import Control.Monad.Cont.Trans

import Data.Either

-- The ajax effect
foreign import data Ajax :: !

type HttpStatus = String
type Url = String

foreign import getCallImpl
  """function getCallImpl(url) {
     return function (onSuccess) {
          return function (onFailure) {
                 var xmlhttp;

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
          };
      };
  }""" :: forall eff. Url -> (String -> Eff (aj :: Ajax | eff) Unit) -> (HttpStatus -> Eff (aj :: Ajax | eff) Unit) -> (Eff (aj :: Ajax | eff) Unit)

foreign import postCallImpl
  """function postCallImpl(url) {
     return function (content) {
         return function (onSuccess) {
              return function (onFailure) {
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
              };
          };
     };
  }""" :: forall eff. Url -> String -> (String -> Eff (aj :: Ajax | eff) Unit) -> (HttpStatus -> Eff (aj :: Ajax | eff) Unit) -> (Eff (aj :: Ajax | eff) Unit)

type M eff = Eff (aj :: Ajax | eff)

getCall :: forall eff.
           Url ->
           (Either HttpStatus String -> M eff Unit) ->
           M eff Unit
getCall url k =
  getCallImpl url (k <<< Right) (k <<< Left)

postCall :: forall eff.
            Url ->
            String ->
            (Either HttpStatus String -> M eff Unit) ->
            M eff Unit
postCall url content k =
  postCallImpl url content (k <<< Right) (k <<< Left)

type C eff = ContT Unit (M eff)

getCallCont :: forall eff.
   Url ->
   C eff (Either HttpStatus String)
getCallCont url = ContT $ getCall url

postCallCont :: forall eff.
                Url ->
                String ->
                C eff (Either HttpStatus String)
postCallCont url content = ContT $ postCall url content

loadTransformSave :: forall eff. Url -> Url -> C eff (Either HttpStatus String)
loadTransformSave inUrl outUrl = do
  u <- getCallCont inUrl
  case u of
    Left status -> return $ Left status
    Right content -> postCallCont outUrl content

