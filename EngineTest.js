/**
 * Created by Alexandre on 15/10/2016.
 */


PentagoTest = TestCase("PentagoTest");

PentagoTest.prototype.testStartGame = function() {
    var engine = new Pentago.Engine();
    assertEquals('w', engine.startGame());
};

PentagoTest.prototype.testGetMarbles = function() {
    var engine = new Pentago.Engine();
    assertEquals(0, engine.getMarbles());
};
// troisieme histoire
PentagoTest.prototype.testGetSlot = function() {
    var engine = new Pentago.Engine();
    engine.startGame();
    assertEquals('', engine.getSlot(0, 0));
    engine.addMarble(0, 0);
    assertEquals('w', engine.getSlot(0, 0));
};
// quatrieme histoire
PentagoTest.prototype.testAddMarble = function() {
    var engine = new Pentago.Engine();
    engine.startGame();
    engine.addMarble(0, 0);
    assertEquals(1, engine.getMarbles());
    engine.switchPlayer();
    engine.addMarble(0, 2);
    assertEquals(2, engine.getMarbles());
    assertException(function () { engine.addMarble(0, 0); }, "slotAlreadyOccupiedException");
};
// cinquieme  hsitoire
PentagoTest.prototype.testRotateSubBoard = function() {
    var engine = new Pentago.Engine();
    engine.startGame();
    engine.addMarble(0, 0);
    engine.rotateSubBoard(0);
    assertEquals('w', engine.getSlot(0, 2));
};

PentagoTest.prototype.testGetCurrentPlayer = function() {
    var engine = new Pentago.Engine();
    engine.startGame();
    assertEquals('w', engine.getCurrentPlayer());
};

PentagoTest.prototype.testSwitchPlayer = function() {
    var engine = new Pentago.Engine();
    engine.startGame();
    engine.switchPlayer();
    assertEquals('b', engine.getCurrentPlayer());
};

PentagoTest.prototype.testReverseRotateSubBoard = function() {
    var engine = new Pentago.Engine();
    engine.startGame();
    engine.addMarble(0, 0);
    engine.rotateSubBoard(0);
    engine.switchPlayer();
    engine.addMarble(0, 0);
    engine.reverseRotateSubBoard(0);
    assertEquals('w', engine.getSlot(0, 0));
    assertEquals('b', engine.getSlot(0, 6));
};
// dixieme histoire
PentagoTest.prototype.testTenthHistory = function() {
    var engine = new Pentago.Engine();
    engine.startGame();
    engine.addMarble(0, 0); // a1
    engine.rotateSubBoard(0);
    engine.switchPlayer();

    engine.addMarble(0, 0);
    engine.reverseRotateSubBoard(0);
    engine.switchPlayer();

    engine.addMarble(0, 1); // b1
    engine.rotateSubBoard(0);
    engine.switchPlayer();

    engine.addMarble(0, 3); // a2
    engine.reverseRotateSubBoard(0);
    engine.switchPlayer();

    engine.addMarble(0, 2); // c1
    engine.rotateSubBoard(0);
    engine.switchPlayer();

    engine.addMarble(0, 6); // a3
    engine.reverseRotateSubBoard(0);
    engine.switchPlayer();

    engine.addMarble(1, 0); // d1
    engine.reverseRotateSubBoard(1);
    engine.switchPlayer();

    engine.addMarble(1, 8); // f3
    engine.rotateSubBoard(1);

    assertEquals(8, engine.getMarbles());
    assertEquals('w', engine.getSlot(0, 0));
    assertEquals('w', engine.getSlot(0, 1));
    assertEquals('w', engine.getSlot(0, 2));
    assertEquals('w', engine.getSlot(1, 0));
    assertEquals('b', engine.getSlot(0, 6));
    assertEquals('b', engine.getSlot(0, 7));
    assertEquals('b', engine.getSlot(0, 8));
    assertEquals('b', engine.getSlot(1, 6));
};

PentagoTest.prototype.testPlay = function() {
    var engine = new Pentago.Engine();
    engine.play("c4cbl ;d4abr ;c3ctl ;c3ctl ;c4cbl ;e5cbr ;b1ctl ;b2ctr ;c4cbl ;c3");
};

PentagoTest.prototype.testEleventhHistory = function() {
    var engine = new Pentago.Engine();
    engine.startGame();
    engine.addMarble(0, 0); // a1
    engine.rotateSubBoard(0);
    engine.switchPlayer();

    engine.addMarble(0, 0);
    engine.reverseRotateSubBoard(0);
    engine.switchPlayer();

    engine.addMarble(0, 1); // b1
    engine.rotateSubBoard(0);
    engine.switchPlayer();

    engine.addMarble(0, 3); // a2
    engine.reverseRotateSubBoard(0);
    engine.switchPlayer();

    engine.addMarble(0, 2); // c1
    engine.rotateSubBoard(0);
    engine.switchPlayer();

    engine.addMarble(0, 6); // a3
    engine.reverseRotateSubBoard(0);
    engine.switchPlayer();

    engine.addMarble(1, 0); // d1
    engine.reverseRotateSubBoard(1);
    engine.switchPlayer();

    engine.addMarble(1, 8); // f3
    engine.rotateSubBoard(1);
    engine.switchPlayer();

    engine.addMarble(1, 1); // e1

    assertEquals(true, engine.checkWin());

    PentagoTest.prototype.testPlay = function() {

        engine.addMarble(6, 2, "b");
    };



};