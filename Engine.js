/**
 * Created by Alexandre on 15/10/2016.
 */


Pentago = {};

Pentago.Engine = function () {
    var _board = new Array(4);
    var _currentPlayer = 'w';
    var _currentMarbles = 0;

    for (var i = 0; i < 4; i++) {
        _board[i] = new Array(9);
    }

    this.getMarbles = function() {
        return _currentMarbles;
    };

    this.getSlot = function(subBoard, position) {
        return _board[subBoard][position];
    };

    this.getCurrentPlayer = function() {
        return _currentPlayer;
    };

    this.addMarble = function(subBoard, position) {
        if (_board[subBoard][position] !== '') {
            throw new slotAlreadyOccupiedException();
        }

        _board[subBoard][position] = _currentPlayer;
        ++_currentMarbles;
    };

    this.rotateSubBoard = function(n) {
        var m0 = _board[n][0];
        var m1 = _board[n][1];
        var m2 = _board[n][2];
        var m3 = _board[n][3];
        var m5 = _board[n][5];
        var m6 = _board[n][6];
        var m7 = _board[n][7];
        var m8 = _board[n][8];

        _board[n][0] = m6;
        _board[n][1] = m3;
        _board[n][2] = m0;
        _board[n][3] = m7;
        _board[n][5] = m1;
        _board[n][6] = m8;
        _board[n][7] = m5;
        _board[n][8] = m2;
    };

    this.reverseRotateSubBoard = function(n) {
        var m0 = _board[n][0];
        var m1 = _board[n][1];
        var m2 = _board[n][2];
        var m3 = _board[n][3];
        var m5 = _board[n][5];
        var m6 = _board[n][6];
        var m7 = _board[n][7];
        var m8 = _board[n][8];

        _board[n][0] = m2;
        _board[n][1] = m5;
        _board[n][2] = m8;
        _board[n][3] = m1;
        _board[n][5] = m7;
        _board[n][6] = m0;
        _board[n][7] = m3;
        _board[n][8] = m6;
    };

    this.startGame = function() {
        _currentPlayer = 'w';
        _currentMarbles = 0;
        resetBoard();
        return _currentPlayer;
    };

    this.switchPlayer = function() {
        _currentPlayer = _currentPlayer === 'w' ? 'b' : 'w';
    };
    // onzieme histoire
    this.checkWin = function() {
        // (a1, b1, c1, d1 et e1)
        if(this.getSlot(0, 0) === this.getSlot(0, 1) &&
            this.getSlot(0, 1) === this.getSlot(0, 2) &&
            this.getSlot(0, 2) === this.getSlot(1, 0) &&
            this.getSlot(1, 0) === this.getSlot(1, 1)) {
            return true;
        }

        return false;
    };

    // douzieme histoire
    this.play = function(str) {
        // c4cbl ;d4abr ;c3ctl ;c3ctl ;c4cbl ;e5cbr ;b1ctl ;b2ctr ;c4cbl ;c3
        var res = str.split(';');
        for (var i = 0; i < res.length; i++) {
            var column = res[i][0].charCodeAt(0) - 97;
            var row = res[i][1];
            var rotType = res[i][2];
            var subBoard = res[i][3] + res[i][4];
            console.log(column + " " + row + " " + rotType + " " + subBoard);
        }
    };

    // var ch = coordonne.charCodeAt(0) - 97;
    // var ligne = coordonne[1] - 1;


    var resetBoard = function() {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 9; j++) {
                _board[i][j] = '';
            }
        }
    };


    function marbles_alignment() {
        var count = 1;
        var ex = undefined
        var j = undefined;
        var i;
        var check;
       for( i = 0; i<_board.length; i++){
            for(var j = 0; j<_board.length; j++){
                if(j != 0)
                    ex = _board[j-1][i];

                count = check(count, ex, _board[j][i]);
                if(count>=5)
                    return _board[j][i];
            }
        }
    };

    function column_alignment() {
        for(var i = 0; i<_board.length; i++){
            var count = 1;
            var ex = undefined;
            var j;
            var check;
            for( j = 0; j<_board.length; j++){
                if(j != 0)
                    ex = _board[i][j-1];

                count= check(count, ex, _board[i][j]);
                if(count>=5)
                    return _board[i][j];
            }
        }
    };
    function slotAlreadyOccupiedException() {
        this.name = "slotAlreadyOccupiedException";
    }
};