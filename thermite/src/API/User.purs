module API.User where

foreign import getCall
  """function getCall(url) {
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
               console.log(xmlhttp.responseText);
           }
           else if(xmlhttp.status === 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
     };

     xmlhttp.open('GET', url, true);
     xmlhttp.send();

     return msg;
  }""" :: String -> String


