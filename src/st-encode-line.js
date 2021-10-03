import {NotImplementedError} from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
    if (str=='') {
        return '';
    }
    let last = str[str.length-1]
    let n = 0;
    let newStr = '';
    for (let i = str.length - 1; i >= 0; --i) {
        if (last == str[i]) {
            n += 1
        } else {
            n > 1 ? newStr = `${n}` + last + newStr : newStr = last + newStr;
            last=str[i];
            n=1;
        }
    }
    n > 1 ? newStr = `${n}` + last + newStr : newStr = last + newStr;
    return newStr;
}


