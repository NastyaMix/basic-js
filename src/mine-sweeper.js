const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result.push([]);

    for (let j = 0; j < matrix[i].length; j++) {
      let bombs = 0;
      for (let row = i - 1; row <= i + 1; row++) {
        for (let col = j - 1; col <= j + 1; col++) {
          if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[i].length) {
            if (matrix[row][col]) {
            bombs++;
            }
          }
        }
      }
      if (matrix[i][j]) {
        bombs--;
      }
      result[i][j] = bombs;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
