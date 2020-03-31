/**
 * Converting Objects to Arrays
 * Write a function that converts an object into an array, where each element represents a key-value pair.
 * 
 * Examples
 * toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
 * 
 * toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
 * 
 * toArray({}) ➞ []
 * Notes
 * Return an empty array if the object is empty.
 * 
 * Test.assertSimilar(toArray({ a: 1, b: 2 }), [["a", 1], ["b", 2]])
 * Test.assertSimilar(toArray({ foo: 33, bar: 45, baz: 67 }), [["foo", 33], ["bar", 45], ["baz", 67]])
 * Test.assertSimilar(toArray({ shrimp: 15, tots: 12 }), [["shrimp", 15], ["tots", 12]])
 * Test.assertSimilar(toArray({}), [])
 */

function toArray(obj) {
	return Object.entries(obj);
}
