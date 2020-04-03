/**
 * Is It a Triangle?
 * Create a function that takes three numbers as arguments and returns true if it's a triangle and false if not.
 * 
 * Examples
 * isTriangle(2, 3, 4) ➞ true
 * 
 * isTriangle(3, 4, 5) ➞ true
 * 
 * isTriangle(4, 3, 8) ➞ false
 * Notes
 * a, b and, c are the side lengths of the triangles.
 * Test input will always be three positive numbers.
 * 
 * Test.assertEquals(isTriangle(4, 5, 6), true)
 * Test.assertEquals(isTriangle(3, 4, 6), true)
 * Test.assertEquals(isTriangle(2, 5, 7), false)
 * Test.assertEquals(isTriangle(2, 5, 9), false)
 * Test.assertEquals(isTriangle(2, 9, 5), false)
 * Test.assertEquals(isTriangle(9, 2, 5), false)
 * Test.assertEquals(isTriangle(11, 12, 20), true)
 * Test.assertEquals(isTriangle(14, 3, 12), true)
 * Test.assertEquals(isTriangle(23, 4, 28), false)
 * Test.assertEquals(isTriangle(21, 4, 25), false)
 */

function isTriangle(a: number, b: number, c:number): boolean {
	return a+b>c && a+c>b && b+c>a;
}
