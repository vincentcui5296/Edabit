/**
 *   RegEx Exercise 1: Find the time
 * The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.
 * 
 * Challenge
 * Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456.
 * In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result.
 * The regexp should not match 123:456.
 * Notes
 * The solution is in the Resources tab 
 * 
 * const str = "Breakfast at 09:00 in the room 123:456.";
 * 
 * const validate = (REGEXP) => {
 * 	 // if(!//.test(String(REGEXP))) return () => "invalid" 
 * 	 return function testReg(str) {
 * 		 return str.match(REGEXP)
 * 	 }
 * }
 * 
 * const testExp = validate(REGEXP)
 * 
 * // Test.assertNotEquals(testExp(str), "invalid", "Nothing new here")
 * Test.assertSimilar(testExp(str), ["09:00"]) 
 * 
 * // credits to https://javascript.info/regexp-boundary
 */

const REGEXP = /\d{2}:\d{2}/
