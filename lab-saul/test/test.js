'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');
let nums = [1, 2, 3, 4];
let letters = ['a', 'b', 'c', 'd'];




describe('testing methods', () => {
  describe('testing fp.map', () => {
    it('should return an 2, 4, 6, 8', () =>{
      expect(fp.map(nums, n => n* 2)).toEqual([2, 4, 6, 8]);
    });
    it('should return null', () =>{
      expect(fp.map(null, n => n)).toEqual(null);
    });
  });
  describe('testing fp.filter', () => {
    it('should return an 3, 4', () =>{
      expect(fp.filter(nums, n => n > 2)).toEqual([3, 4]);
    });
    it('should return null', () =>{
      expect(fp.filter(null, n => n )).toEqual(null);
    });

  });
  describe('testing fp.reduce', () => {
    it('should return an 10', () =>{
      expect(fp.reduce(nums, [(start, end) => start + end])).toEqual(10);
    });
    it('should return null', () =>{
      expect(fp.reduce(null, [(start, end) => start + end])).toEqual(null);
    });
  });
  describe('testing fp.concat', () => {
    it('should return 1,2,3,4,a,b,c,d', () =>{
      expect(fp.concat(nums, letters)).toEqual([1, 2, 3, 4, 'a', 'b', 'c', 'd']);
    });
    it('should return null', () =>{
      expect(fp.concat(null, letters)).toEqual(null);
    });
  });
  describe('testing fp.splice', () => {
    it('should return 1, 2, hi, there, 3, 4', () =>{
      expect(fp.splice(nums, 2, 0, 'hi', 'there')).toEqual([1, 2, 'hi', 'there', 3, 4]);
    });
    it('should return null', () =>{
      expect(fp.splice(null, 2, 0, 'hi', 'there')).toEqual(null);
    });
  });
});
