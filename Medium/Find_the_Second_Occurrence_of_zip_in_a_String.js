/**
 * Find the Second Occurrence of "zip" in a String
 * Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.
 * 
 * Examples
 * findZip("all zip files are zipped") ➞ 18
 * 
 * findZip("all zip files are compressed") ➞ -1
 * Notes
 * Uppercase "Zip" is not the same as lowercase "zip".
 * 
 * Test.assertEquals(findZip("all zip files are zipped"), 18)
 * Test.assertEquals(findZip("all zip files are compressed"), -1)
 * Test.assertEquals(findZip("We believe university-level zip education can be both high quality and low cost. Using the economics of the Internet, we've connected some of the greatest teachers to hundreds of thousands of students all over the world."), -1)
 * Test.assertEquals(findZip("Zip is a file format used for data compression and archiving. A zip file contains one or more files that have been compressed, to reduce file size, or stored as is. The zip file format permits a number of compression algorithms."), 169)
 */

function findZip(str) {
	return str.indexOf("zip", str.indexOf("zip") + 1);
}

// function findZip(str) {
// 	let index1 = str.indexOf("zip");
// 	if (index1 !== -1) {
// 		index2 = str.slice(index1+1).indexOf("zip");
// 		return index2 === -1 ? -1 : index1 + index2 + 1;
// 	}
// 	return -1;
// }
