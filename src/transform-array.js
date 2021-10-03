import {NotImplementedError} from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }
    if (arr.length == 0) {
        return []
    }
    let newarr = [];
    let discard = false;
    for (let i = 0; i < arr.length; ++i) {
        switch (arr[i]) {
            case '--discard-next':
                i = i + 1
                discard = true;
                break;
            case '--discard-prev':
                if (i > 0 && !discard) {
                    newarr.pop()
                }
                break;
            case '--double-next':
                if ((i + 1) < arr.length) {
                    newarr.push(arr[i + 1])
                }
                break;
            case '--double-prev':
                if (i > 0 && !discard) {
                    newarr.push(arr[i - 1])
                }
                break;
            default:
                newarr.push(arr[i])
        }
    }
    return newarr
}
