/**
 * Limit a Number's Value
 * Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.
 * 
 * If the number falls within the range, the number should be returned.
 * If the number is less than the lower limit of the range, the lower limit should be returned.
 * If the number is greater than the upper limit of the range, the upper limit should be returned.
 * Examples
 * limitNumber(5, 1, 10) ➞ 5
 * 
 * limitNumber(-3, 1, 10) ➞ 1
 * 
 * limitNumber(14, 1, 10) ➞ 10
 * 
 * limitNumber(4.6, 1, 10) ➞ 4.6
 * Notes
 * All test inputs will be valid numbers.
 * All test inputs' range parameters will be in the correct order (i.e. the lower range will be less than or equal to the upper range).
 * 
 * Test.assertEquals(limitNumber(5, 1, 10), 5)
 * Test.assertEquals(limitNumber(-3, 1, 10), 1)
 * Test.assertEquals(limitNumber(14, 1, 10), 10)
 * Test.assertEquals(limitNumber(4.6, 1, 10), 4.6)
 * Test.assertEquals(limitNumber(-100, -73, -70), -73)
 * Test.assertEquals(limitNumber(2, -73, -70), -70)
 * Test.assertEquals(limitNumber(-71.5, -73, -70), -71.5)
 * Test.assertEquals(limitNumber(7, 8, 8.1), 8)
 * Test.assertEquals(limitNumber(9, 8, 8.1), 8.1)
 * Test.assertEquals(limitNumber(8.05, 8, 8.1), 8.05)
 * Test.assertEquals(limitNumber(16, 16, 16), 16)
 * Test.assertEquals(limitNumber(-1, 16, 16), 16)
 * Test.assertEquals(limitNumber(800, 16, 16), 16)
 */

function limitNumber(num, rangeLow, rangeHigh) {
	return Math.max(rangeLow, Math.min(rangeHigh, num));
}
