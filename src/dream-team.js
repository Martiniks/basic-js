import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * reateDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members ) {
  if (!Array.isArray(members)) {
    return false
  }
  return members.filter( (elem) => { return (typeof elem == 'string')}).map( elem => elem.trim().toUpperCase()[0]).sort().join('');
  // console.log(arr)


  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]);
