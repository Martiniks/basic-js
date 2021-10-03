import {NotImplementedError} from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b);
    for (let i = 1; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            if (!isZero(i, j)) {
                sum += matrix[i][j]
            }
        }
    }
    return sum

    function isZero(x, y) {
        for (let i = 0; i < x; ++i) {
            if (matrix[i][y] == 0) {
                return true
            }
        }
        return false
    }

}
