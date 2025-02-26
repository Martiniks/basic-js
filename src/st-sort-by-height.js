import {NotImplementedError} from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {

    // return arr.sort(sortFunc)
    let newArr = arr.filter(elem => elem != '-1').sort(sortFunc)
    let j = 0
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] != '-1') {
            arr[i] = newArr[j];
            j += 1;
        }
    }
    return arr


    function sortFunc(a, b) {
        return a - b
    }

}
