/**
 * Hitting the Jackpot
 * Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
 * 
 * Examples
 * testJackpot(["@", "@", "@", "@"]) ➞ true
 * 
 * testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
 * 
 * testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
 * 
 * testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false
 * 
 * testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
 * Notes
 * The elements must be exactly identical for there to be a jackpot.
 * 
 * Test.assertEquals(testJackpot(['@', '@', '@', '@']), true)
 * Test.assertEquals(testJackpot(['!', '!', '!', '!']), true)
 * Test.assertEquals(testJackpot(['abc', 'abc', 'abc', 'abc']), true)
 * Test.assertEquals(testJackpot(['karaoke', 'karaoke', 'karaoke', 'karaoke']), true)
 * Test.assertEquals(testJackpot(['SS', 'SS', 'SS', 'SS']), true)
 * Test.assertEquals(testJackpot([':(', ':)', ':|', ':|']), false)
 * Test.assertEquals(testJackpot(['&&', '&', '&&&', '&&&&']), false)
 * Test.assertEquals(testJackpot(['hee', 'heh', 'heh', 'heh']), false)
 * Test.assertEquals(testJackpot(['SS', 'SS', 'SS', 'Ss']), false)
 * Test.assertEquals(testJackpot(['SS', 'SS', 'Ss', 'Ss']), false)
 */

function testJackpot(result) {
	return new Set(result).size === 1;
}

// function testJackpot(result) {
// 	return result.every(e => e === result[0]);
// }
