const CONFIG = {
  "chessboard": {
    "chess.com": ["div#game-board"],
    "lichess": ["cg-board"]
  },
  "white": {
    "king": {
      "chess.com": ["div#piece-5"],
      "lichess": ["piece.white.king"]
    },
    "queen": {
      "chess.com": ["div#piece-4"],
      "lichess": ["piece.white.queen"]
    },
    "rook": {
      "chess.com": [
        "div#piece-1",
        "div#piece-8"
      ],
      "lichess": ["piece.white.rook"]
    },
    "knight": {
      "chess.com": [
        "div#piece-2",
        "div#piece-7"
      ],
      "lichess": ["piece.white.knight"]
    },
    "bishop": {
      "chess.com": [
        "div#piece-3",
        "div#piece-6"
      ],
      "lichess": ["piece.white.bishop"]
    },
    "pawn": {
      "chess.com": [
        "div#piece-9",
        "div#piece-10",
        "div#piece-11",
        "div#piece-12",
        "div#piece-13",
        "div#piece-14",
        "div#piece-15",
        "div#piece-16"
      ],
      "lichess": ["piece.white.pawn"]
    }
  },
  "black": {
    "king": {
      "chess.com": ["div#piece-29"],
      "lichess": ["piece.black.king"]
    },
    "queen": {
      "chess.com": ["div#piece-28"],
      "lichess": ["piece.black.queen"]
    },
    "rook": {
      "chess.com": [
        "div#piece-25",
        "div#piece-32"
      ],
      "lichess": ["piece.black.rook"]
    },
    "knight": {
      "chess.com": [
        "div#piece-26",
        "div#piece-31"
      ],
      "lichess": ["piece.black.knight"]
    },
    "bishop": {
      "chess.com": [
        "div#piece-27",
        "div#piece-30"
      ],
      "lichess": ["piece.black.bishop"]
    },
    "pawn": {
      "chess.com": [
        "div#piece-17",
        "div#piece-18",
        "div#piece-19",
        "div#piece-20",
        "div#piece-21",
        "div#piece-22",
        "div#piece-23",
        "div#piece-24"
      ],
      "lichess": ["piece.black.pawn"]
    }
  }
}

/**
 * Check if chessboard is rotated.
 *  @returns {boolean} true if chessboard is rotated
 */
function isRotated() {

  if (website() === 'lichess') {
    if (document.getElementsByClassName('orientation-black').length > 0) {
      return true;
    } else {
      return false;
    }
  } else if (website() === 'chess.com') {
    if (document.getElementsByClassName('letter')[0].innerText === 'h') {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * Check current website
 *  @returns {string} return name of current website
 */
function website() {
  const website = window.location.hostname;

  if (website === 'lichess.org') return "lichess";
  if (website === 'www.chess.com') return "chess.com";
}

/**
 * Set Css to chess website
 * @param {string} image base64 image
 * @param {Object[]} selector for html structure of chess website
 */
function setCss(image, selector) {

  selector.forEach((item) => {
    GM_addStyle(item + '{background-image: url("' + image + '") !important;}');
  });
}

/**
 * Set chess images pieces on chessboard
 * @param {string} chessboard custom pieces image
 */
function setPieces(chessboard) {

  if ((isRotated() === true) && (chessboard.rotation === 'disable')) {
    for (const piece in chessboard.me) {
      if (chessboard.me[piece].length > 0) {
        setCss(chessboard.me[piece], CONFIG.black[piece][website()]);
      }
    }

    for (const piece in chessboard.opponent) {
      if (chessboard.opponent[piece].length > 0) {
        setCss(chessboard.opponent[piece], CONFIG.white[piece][website()]);
      }
    }

  } else {
    for (const piece in chessboard.me) {
      if (chessboard.me[piece].length > 0) {
        setCss(chessboard.me[piece], CONFIG.white[piece][website()]);
      }
    }

    for (const piece in chessboard.opponent) {
      if (chessboard.opponent[piece].length > 0) {
        setCss(chessboard.opponent[piece], CONFIG.black[piece][website()]);
      }
    }

  }
}

/**
 * Set custom chessboard image
 * @param {string} chessboard get custom chessboard image
 */
function setChessboard(chessboard) {

  setCss(chessboard, CONFIG.chessboard[website()]);

}
