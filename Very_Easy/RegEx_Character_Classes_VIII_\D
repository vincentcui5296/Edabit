/**
 * RegEx: Character Classes VIII ⁠- \D
 * You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
 * 
 * Here are a list of the characters classes in JavaScript:
 * 
 * ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
 * There is a hidden message in this string:
 * 
 * const str = "242Edabit23 45can344 3be3 254324addictive!"
 * Write the regular expression that reveals the hidden message. You have to remove all of the numbers to reveal the message. Use the character class \D in your expression.
 * 
 * Notes
 * Check the Resources tab for details on character classes if you're stuck.
 * 
 * const str = "242Edabit23 45can344 3be3 254324addictive!"
 * 
 * const validate = (REGEXP) => {
 * 	 if(!/\\D/.test(String(REGEXP))) return () => "required"
 * 	 return function testReg(str) {
 * 		 return str.match(REGEXP).join("")
 * 	 }
 * }
 * 
 * const testExp = validate(REGEXP)
 * console.log(testExp(str))
 * 
 * Test.assertNotEquals(testExp(str), "required", "You are required to use a \D character class in your expression.")
 * Test.assertSimilar(testExp(str), "Edabit can be addictive!")
 */

const REGEXP = /\D/g;
