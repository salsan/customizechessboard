// ==UserScript==
// @name         Lichess.org
// @namespace    CustomizeLichess
// @version      0.3
// @description  Customize Lichess
// @author       Salvatore Santagati
// @match        https://lichess.org/*
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==


(function() {
    'use strict';

    // Convert Image to base64 https://www.base64-image.de/
    const yourKing = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtSJVBzuIOGSogmJBVMRRq1CECqFWaNXB5NIvaNKQpLg4Cq4FBz8Wqw4uzro6uAqC4AeIk6OToouU+L+k0CLWg+N+vLv3uHsHCNUi06y2cUDTbTMRi4qp9KoYeEUAHejBCEZlZhlzkhRHy/F1Dx9f7yI8q/W5P0e3mrEY4BOJZ5lh2sQbxNObtsF5nzjE8rJKfE48ZtIFiR+5rnj8xjnnssAzQ2YyMU8cIhZzTaw0McubGvEUcVjVdMoXUh6rnLc4a8Uyq9+TvzCY0VeWuU5zEDEsYgkSRCgoo4AibERo1UmxkKD9aAv/gOuXyKWQqwBGjgWUoEF2/eB/8LtbKzs54SUFo0D7i+N8DAGBXaBWcZzvY8epnQD+Z+BKb/hLVWDmk/RKQwsfAb3bwMV1Q1P2gMsdoP/JkE3Zlfw0hWwWeD+jb0oDfbdA15rXW30fpw9AkrqK3wAHh8BwjrLXW7y7s7m3f8/U+/sBfLtyq5OX9JAAAAAGUExURQAAAAAAAKVnuc8AAAABdFJOUwBA5thmAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+QHBg4sLaA6aikAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAA/ElEQVQ4y93TMWrDMBQGYIkM2l4vYBA9QjcVWjTmOipebAg40IA29wa+ShM8eHOuEJHhbcEliwtG6WTpaQiUlkKJtg9JP09PEmO/GHcDA6KRClSi5/Z9e02PbU1SPhN9UAFPhVTs8rYmyu2a3dAQr/Q4C0vn+D7RSQrIAyfdQRW0KhGKoMJQKYNgrqnEhki3nkjy3txQq/n22+rz3Zi5Yb6Gi/P6OM16OkCJWZDzBv28Tx1T1QZZVFPihqyMmb1yp8yNtIQDLeg+KU8nP0D+l5f8UykpHoagSXfnKah56WwWVFdofRBUKIiMiLkCiqXYROluETNBWj7+VRe+AIcgbglyOq4xAAAAAElFTkSuQmCC')
    ";

    let isBlack = document.getElementsByClassName('orientation-black');

    if ( isBlack.length > 0 ) {
      GM_addStyle('piece.black.king {background-image:'+yourKing+' !important;}');
      } else {
        GM_addStyle('piece.white.king {background-image:'+yourKing+' !important;}');
      }

})();
