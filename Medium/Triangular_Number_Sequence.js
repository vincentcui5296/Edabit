/**
 * Triangular Number Sequence
 * This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. Write a function that converts n number of places with its corresponding number.
 * 
 * Examples
 * triangle(1) ➞ 1
 * 
 * triangle(6) ➞ 21
 * 
 * triangle(215) ➞ 23220
 * Notes
 * N/A
 * 
 * Test.assertEquals(triangle(1), 1)
 * Test.assertEquals(triangle(2), 3)
 * Test.assertEquals(triangle(3), 6)
 * Test.assertEquals(triangle(8), 36)
 * Test.assertEquals(triangle(2153), 2318781)
 */

function triangle(n) {
	return n === 1 ? 1 : triangle(n-1) + n;
}

// function triangle(n) {
// 	return n * (n + 1) / 2;
// }
