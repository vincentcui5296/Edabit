/**
 * Remove Trailing and Leading Zeros
 * Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
 * 
 * Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
 * Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
 * Examples
 * removeLeadingTrailing("230.000") ➞ "230"
 * 
 * removeLeadingTrailing("00402") ➞ "402"
 * 
 * removeLeadingTrailing("03.1400") ➞ "3.14"
 * 
 * removeLeadingTrailing("30") ➞ "30"
 * Notes
 * Return a string.
 * If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
 * If the number is 0, 0.0, 000, 00.00, etc... return "0".
 * 
 * Test.assertEquals(removeLeadingTrailing("230.000"), "230")
 * Test.assertEquals(removeLeadingTrailing("00402"), "402")
 * Test.assertEquals(removeLeadingTrailing("03.1400"), "3.14")
 * Test.assertEquals(removeLeadingTrailing("30"), "30")
 * Test.assertEquals(removeLeadingTrailing("30.0000"), "30")
 * Test.assertEquals(removeLeadingTrailing("24340"), "24340")
 * Test.assertEquals(removeLeadingTrailing("0404040"), "404040")
 * Test.assertEquals(removeLeadingTrailing("0"), "0")
 * Test.assertEquals(removeLeadingTrailing("00"), "0")
 * Test.assertEquals(removeLeadingTrailing("0.000000"), "0")
 * Test.assertEquals(removeLeadingTrailing("0000.000"), "0")
 * Test.assertEquals(removeLeadingTrailing("00.0001"), "0.0001")
 * Test.assertEquals(removeLeadingTrailing("10000"), "10000")
 * Test.assertEquals(removeLeadingTrailing("1345"), "1345")
 * Test.assertEquals(removeLeadingTrailing("30.000020"), "30.00002")
 * Test.assertEquals(removeLeadingTrailing("00200.1900001"), "200.1900001")
 * 
 */

function removeLeadingTrailing(n) {
	return ''+ +n;
}

// function removeLeadingTrailing(n) {
// 	return String(Number(n));
// }
