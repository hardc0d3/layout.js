/*
*
*
* License:
*
*
* Copyright (c) 2014 Dobri Stoilov ( hardcode@rivadb.com )
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or
* without modification, are permitted provided that the following
* conditions are met:
*
* * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
* * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following
* disclaimer in the documentation and/or other materials
* provided with the distribution.
* * Neither the name of Dobri Stoilov (hardcode@rivadb.com) nor the names of its
* contributors may be used to endorse or promote products
* derived from this software without specific prior written
* permission.
* 
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
* CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
* INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS
* BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
* TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
* ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
* OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*
* Author: Dobri Stoilov (hardcode@rivadb.com)
*
* Description: Make includable template html,css and js modulse
*  use: see test.html 
*
*/


function Layoutjs(){
};

Layoutjs.prototype.bind = function (func, thisVal) {
    return function () {
        return func.apply(thisVal, arguments);
    }
};

function Layoutjs_ajaxjs (method,urijs,async){
   //  if( req == null ) { return false; }
     if(window.XMLHttpRequest){
         req = new XMLHttpRequest();
      }
    else{
        return null;
     }
    req.onreadystatechange = function(){
       if (req.readyState === 4) {
       //TODO: implement more different statuses and err handling 
       if (req.status === 200 ){
                 eval(req.responseText);
                 req = null; //!

        } else {
              //;
              }
     } else
     { /*not ready */; }
    }
    req.open(method,urijs,async);
    req.send();
}

Layoutjs.prototype.evaljson =  function (jsonstr){
    return eval('('+req.responseText+')');
}


Layoutjs.prototype.load = function (method,urijs,async,onready){
//function Layoutjs_ajaxjson (method,urijs,async){
     if(window.XMLHttpRequest){
         req = new XMLHttpRequest();
      }
    else{
        return null;
     }
    req.onreadystatechange = function(){
       if (req.readyState === 4) {
       //TODO: implement more different statuses and err handling 
       if (req.status === 200 ){
                 onready('('+req.responseText+')');
        } else {
              //;
              }
     } else
     { /*not ready */; }
    }
    req.open(method,urijs,async);
    req.send();
}


Layoutjs.prototype.include = function(method,urixml,urijs,target,async){
     if(window.XMLHttpRequest){
         req = new XMLHttpRequest();
      }
    else{
        return null;
     }
    req.onreadystatechange = function(){
       if (req.readyState === 4) {
       //TODO: implement more different statuses and handling 
       if (req.status === 200 ){
                 element = document.getElementById(target);
                 element.innerHTML = req.responseText;
                 if( urijs != null){
                     Layoutjs_ajaxjs(method, urijs, async);
                 }
                 req = null;
                 
        } else {
              //;
              }
     } else
     { /*not ready todo*/;
     }
    }
    req.open(method,urixml,async);
    req.send(); 
}; 

Layoutjs.prototype.text = function(method,urixml,urijs,target,async){
     if(window.XMLHttpRequest){
         req = new XMLHttpRequest();
      }
    else{
        return null;
     }
    req.onreadystatechange = function(){
       if (req.readyState === 4) {
       //TODO: implement more different statuses and handling 
       if (req.status === 200 ){
                 e = document.getElementById(target);
                 if ('textContent' in e) { 
                     e.textContent = req.responseText;
                 }
                 else { //ie7,8 
                     e.innerText = req.responseText;
                 }
                 if( urijs != null){
                     Layoutjs_ajaxjs(method, urijs, async);
                 }
                 req = null;

        } else {
              //;
              }
     } else
     { /*not ready todo*/;
     }
    }
    req.open(method,urixml,async);
    req.send();
};
 


