import {sum, subs, times, div, expo} from './operations';

test("add 1+3 to be equal 3", () => {
   expect(sum(1,2)).toBe(3); 
});

test("subs 10-13 to be equal -3", () => {
   expect(subs(10,13)).toBe(-3); 
});

test("times 2 * 4 to be equal 8", () => {
   expect(times(2,4)).toBe(8); 
});

test("div 18 * 3 to be equal 6", () => {
   expect(div(18,3)).toBe(6); 
});

test("div 18 * 0 to throw 'div by zero'", () => {

   expect(() => {
      div(18,0);
    }).toThrow('div by zero');

});

test("expo 2 ** 4 to be equal 16", () => {
   expect(expo(2,4)).toBe(16); 
});

