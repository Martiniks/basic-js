import {NotImplementedError} from '../extensions/index.js';

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
export default function minesweeper(matrix) {
    let newArr = [];
    for (let i = 0; i < matrix.length; ++i) {
        newArr[i] = [];
    }

    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            newArr[i].push(countMine(i, j));
        }
    }
    return newArr

    function countMine(x, y) {
        let n = 0;

        if ((x - 1) >= 0 && (y - 1) >= 0 && matrix[x - 1][y - 1]) {
            n += 1
        }

        if ((y - 1) >= 0 && matrix[x][y - 1]) {
            n += 1
        }

        if ((y - 1) >= 0 && (x + 1) < matrix.length && matrix[x + 1][y - 1]) {
            n += 1
        }

        if ((x - 1) >= 0 && matrix[x - 1][y]) {
            n += 1
        }

        if ((x + 1) < matrix.length && matrix[x + 1][y]) {
            n += 1
        }

        if ((x - 1) >= 0 && matrix[x - 1][y + 1]) {
            n += 1
        }

        if (matrix[x][y + 1]) {
            n += 1
        }

        if ((x + 1) < matrix.length && matrix[x + 1][y + 1]) {
            n += 1
        }
        return n
    }

}
