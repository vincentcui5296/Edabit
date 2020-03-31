/**
 * Concatenate First and Last Name into One String
 * Given two strings, firstName and lastName, return a single string in the format "last, first".
 * 
 * Examples
 * concatName("First", "Last") ➞ "Last, First"
 * 
 * concatName("John", "Doe") ➞ "Doe, John"
 * 
 * concatName("Mary", "Jane") ➞ "Jane, Mary"
 * Notes
 * Don't forget to return the result.
 * If you get stuck on a challenge, find help in the Resources tab.
 * If you're really stuck, unlock solutions in the Solutions tab.
 * 
 * Test.assertEquals(concatName("John", "Doe"), "Doe, John")
 * Test.assertEquals(concatName("First", "Last"), "Last, First")
 * Test.assertEquals(concatName("A", "B"), "B, A")
 * 
 * // In case someone is making odd assumptions about comma characters.
 * Test.assertEquals(concatName(",", ","), ",, ,")
 */

function concatName(firstName, lastName) {
	return `${lastName}, ${firstName}`
}
