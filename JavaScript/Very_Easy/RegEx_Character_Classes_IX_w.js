/**
 * RegEx: Character Classes IX ⁠- \w
 * You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
 * 
 * Here are a list of the characters classes in JavaScript:
 * 
 * ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
 * There is a hidden word in this string:
 * 
 * const str = "**^&$Regular#$%Expressions$%$$%^**"
 * Write the regular expression that reveals the hidden word. You have to remove all of the special characters to reveal the word. Use the character class \w in your expression.
 * 
 * Notes
 * Check the Resources tab for details on character classes if you're stuck.
 * 
 * const str = "**^&$Regular#$%Expressions$%$$%^**"
 * 
 * const validate = (REGEXP) => {
 * 	 if(!/\\w/.test(String(REGEXP))) return () => "required"
 * 	 return function testReg(str) {
 * 		 return str.match(REGEXP).join("")
 * 	 }
 * }
 * 
 * const testExp = validate(REGEXP)
 * console.log(testExp(str))
 * 
 * Test.assertNotEquals(testExp(str), "required", "You are required to use a \w character class in your expression.")
 * Test.assertSimilar(testExp(str), "RegularExpressions")
 */

const REGEXP = /\w/g
