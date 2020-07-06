// ==UserScript==
// @name         Customize Chessboard
// @namespace    https://github.com/salsan/customizechessboard
// @version      0.7
// @updateURL    https://raw.githubusercontent.com/salsan/customizechessboard/master/customizechessboard.js
// @description  Customize Chessboard of internet chess server
// @author       salsan
// @copyright    2020, Salvatore Santagati (https://blog.salsan.dev/)
// @license      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @match        https://lichess.org/*
// @match        https://www.chess.com/*
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

function isRotated (){
  const website = window.location.hostname;

  if ( website === 'lichess.org' ){
      if ( document.getElementsByClassName('orientation-black').length > 0){
        return true;
      } else {
        return false;
      }
    } else if ( website === 'www.chess.com') {
        if ( document.getElementsByClassName("letter")[0].innerText === 'h' ){
          return true;
        } else {
          return false;
        }
    }
}


function setPieces ( pieces ){
    const website = window.location.hostname;

      if ( website === 'lichess.org' ){
            if ( isRotated() ) {
                      GM_addStyle('piece.black.king {background-image:'+pieces+' !important;}');
            } else {
                      GM_addStyle('piece.white.king {background-image:'+pieces+' !important;}');

            }
      } else if ( website === 'www.chess.com') {
               if ( isRotated() ) {
                       GM_addStyle('div#piece-29 { background-image:'+pieces+' !important}');
                } else {
                       GM_addStyle('div#piece-5 { background-image:'+pieces+' !important}');
                      }
           }
}

(function() {
    'use strict';

    // Convert Image to base64 https://www.base64-image.de/
    const yourKing = "url('data:image/png;base64,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')";

    setPieces( yourKing );

})();
