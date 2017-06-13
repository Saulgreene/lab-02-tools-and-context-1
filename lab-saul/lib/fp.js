'use strict';


const fp = module.exports = {};

fp.map = (list, callback) => Array.prototype.map.call(list, callback);

fp.filter = (list, callback) => Array.prototype.filter.call(list, callback);

fp.reduce = (list, callback) => Array.prototype.reduce.apply(list, callback);

fp.concat = (arr1, arr2) => Array.prototype.concat.call(arr1, arr2);

fp.splice = (list, ...args) => {
  Array.prototype.splice.apply(list, args);
  return list;
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
