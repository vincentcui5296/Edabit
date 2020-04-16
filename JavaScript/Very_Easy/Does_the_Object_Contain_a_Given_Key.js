/**
 * Does the Object Contain a Given Key?
 * Write a function that returns true if a hash contains the specified key, and false otherwise.
 * 
 * Examples
 * hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false
 * 
 * hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false
 * 
 * hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true
 * Notes
 * N/A
 * 
 * Test.assertEquals(hasKey({ pot: 1, tot: 2, not: 3 }, "not"), true)
 * Test.assertEquals(hasKey({ craves: true, midnight: true, snack: true }, "morning"), false)
 * Test.assertEquals(hasKey({ a: 44, b: 45, c: 46 }, "d"), false)
 * Test.assertEquals(hasKey({ a: "z", b: "y", c: "x" }, "c"), true)
 */

function hasKey(obj, key) {
	return key in obj;
}

// function hasKey(obj, key) {
// 	return obj.hasOwnProperty(key);
// }

// function hasKey(obj, key) {
// 	return Object.keys(obj).includes(key);
// }
