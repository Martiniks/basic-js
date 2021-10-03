import {NotImplementedError} from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    let newObj = {}
    for (let i = 0; i < domains.length; ++i) {
        let str = domains[i];
        let index = str.lastIndexOf('.');
        let newDomain = str.slice(index);
        str = str.slice(0, index);
        while (index > 0 && str.length > 0) {
            addNewDomain(newDomain);
            index = str.lastIndexOf('.');
            if (index > 0) {
                newDomain = newDomain + str.slice(index);
                str = str.slice(0, index);
            }
        }
        if (str.length > 0) {
            newDomain = newDomain + '.' + str;
            addNewDomain(newDomain);
        }
    }
    return newObj;

    function addNewDomain(newDomain) {
        if (newObj.hasOwnProperty(newDomain)) {
            newObj[newDomain] += 1;
        } else {
            newObj[newDomain] = 1;
        }

    }
}
