'use strict';



const fp = module.exports = {};

fp.map = (list, callback) => {
  return (list !== null)? Array.prototype.map.call(list, callback): null;
};

fp.filter = (list, callback) => {
  return(list !== null)? Array.prototype.filter.call(list, callback): null;
};

fp.reduce = (list, callback) => {
  return(list !== null)? Array.prototype.reduce.apply(list, callback): null;
};

fp.concat = (arr1, arr2) => {
  return( arr1 !== null)? Array.prototype.concat.call(arr1, arr2): null;
};

fp.splice = (list, ...args) => {
  if(list !== null){
    Array.prototype.splice.apply(list, args);
    return list;
  } else{
    return null;
  }
};

















// * the standlone functions should have the signature `(array, ...args) => array`
//
// nums = [1, 2, 3, 4]
// nums.map(n => n* 2)
// OUTPUT=2,4,6,8
//
// function map(array, callback){
//   return array.map(callback)
// };
//
// function map(array, callback){
//   return Array.prototype.map.call(list, callback)
// };
//
// map(nums, n => n*2)
//
//
// [1, 2, 3].REDUCE((A, C) => A+ C , initial value)
// reduce([1, 2, ], [(a, c) => a + c])
//
// function reduce(list, args){
//   return Array.prototype.reduce.apply(list, args)
// }
//
// reduce([1, 2, 3], [])
//
// CALL INVOKES A FUNCTION WITH A SPECIFIED CONTEXT AND THEN ARGUMENTS SEPERATED BY COMAS
// APPLY INVOKES A FUNCTION WITH A SPECIFIED CONTEXT AND THEN AN ARRAY OF ARGUMENTS
