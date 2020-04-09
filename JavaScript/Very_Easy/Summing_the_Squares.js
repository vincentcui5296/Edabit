/**
 * Summing the Squares
 * Create a function where given the number n, return the sum of all square numbers up to and including n.
 * 
 * squaresSum(3) ➞ 14
 * // 1² + 2² + 3² =
 * // 1 + 4 + 9 =
 * // 14 
 * Examples
 * squaresSum(3) ➞ 14
 * 
 * squaresSum(12) ➞ 650
 * 
 * squaresSum(13) ➞ 819
 * Notes
 * Remember that n is included in the total.
 * 
 * Test.assertEquals(squaresSum(1), 1)
 * Test.assertEquals(squaresSum(2), 5)
 * Test.assertEquals(squaresSum(3), 14)
 * Test.assertEquals(squaresSum(4), 30)
 * Test.assertEquals(squaresSum(5), 55)
 * Test.assertEquals(squaresSum(6), 91)
 * Test.assertEquals(squaresSum(7), 140)
 * Test.assertEquals(squaresSum(8), 204)
 * Test.assertEquals(squaresSum(9), 285)
 * Test.assertEquals(squaresSum(10), 385)
 * Test.assertEquals(squaresSum(11), 506)
 * Test.assertEquals(squaresSum(12), 650)
 * Test.assertEquals(squaresSum(13), 819)
 * Test.assertEquals(squaresSum(14), 1015)
 * Test.assertEquals(squaresSum(15), 1240)
 * Test.assertEquals(squaresSum(16), 1496)
 * Test.assertEquals(squaresSum(17), 1785)
 * Test.assertEquals(squaresSum(18), 2109)
 * Test.assertEquals(squaresSum(19), 2470)
 * Test.assertEquals(squaresSum(20), 2870)
 * Test.assertEquals(squaresSum(21), 3311)
 * Test.assertEquals(squaresSum(22), 3795)
 * Test.assertEquals(squaresSum(23), 4324)
 * Test.assertEquals(squaresSum(24), 4900)
 * Test.assertEquals(squaresSum(25), 5525)
 * Test.assertEquals(squaresSum(26), 6201)
 * Test.assertEquals(squaresSum(27), 6930)
 * Test.assertEquals(squaresSum(28), 7714)
 * Test.assertEquals(squaresSum(29), 8555)
 * Test.assertEquals(squaresSum(30), 9455)
 * Test.assertEquals(squaresSum(31), 10416)
 * Test.assertEquals(squaresSum(32), 11440)
 * Test.assertEquals(squaresSum(33), 12529)
 * Test.assertEquals(squaresSum(34), 13685)
 * Test.assertEquals(squaresSum(35), 14910)
 * Test.assertEquals(squaresSum(36), 16206)
 * Test.assertEquals(squaresSum(37), 17575)
 * Test.assertEquals(squaresSum(38), 19019)
 * Test.assertEquals(squaresSum(39), 20540)
 * Test.assertEquals(squaresSum(40), 22140)
 * Test.assertEquals(squaresSum(41), 23821)
 * Test.assertEquals(squaresSum(42), 25585)
 * Test.assertEquals(squaresSum(43), 27434)
 * Test.assertEquals(squaresSum(44), 29370)
 * Test.assertEquals(squaresSum(45), 31395)
 * Test.assertEquals(squaresSum(46), 33511)
 * Test.assertEquals(squaresSum(47), 35720)
 * Test.assertEquals(squaresSum(48), 38024)
 * Test.assertEquals(squaresSum(49), 40425)
 * Test.assertEquals(squaresSum(50), 42925)
 * Test.assertEquals(squaresSum(51), 45526)
 * Test.assertEquals(squaresSum(52), 48230)
 * Test.assertEquals(squaresSum(53), 51039)
 * Test.assertEquals(squaresSum(54), 53955)
 * Test.assertEquals(squaresSum(55), 56980)
 * Test.assertEquals(squaresSum(56), 60116)
 * Test.assertEquals(squaresSum(57), 63365)
 * Test.assertEquals(squaresSum(58), 66729)
 * Test.assertEquals(squaresSum(59), 70210)
 * Test.assertEquals(squaresSum(60), 73810)
 * Test.assertEquals(squaresSum(61), 77531)
 * Test.assertEquals(squaresSum(62), 81375)
 * Test.assertEquals(squaresSum(63), 85344)
 * Test.assertEquals(squaresSum(64), 89440)
 * Test.assertEquals(squaresSum(65), 93665)
 * Test.assertEquals(squaresSum(66), 98021)
 * Test.assertEquals(squaresSum(67), 102510)
 * Test.assertEquals(squaresSum(68), 107134)
 * Test.assertEquals(squaresSum(69), 111895)
 * Test.assertEquals(squaresSum(70), 116795)
 * Test.assertEquals(squaresSum(71), 121836)
 * Test.assertEquals(squaresSum(72), 127020)
 * Test.assertEquals(squaresSum(73), 132349)
 * Test.assertEquals(squaresSum(74), 137825)
 * Test.assertEquals(squaresSum(75), 143450)
 * Test.assertEquals(squaresSum(76), 149226)
 * Test.assertEquals(squaresSum(77), 155155)
 * Test.assertEquals(squaresSum(78), 161239)
 * Test.assertEquals(squaresSum(79), 167480)
 * Test.assertEquals(squaresSum(80), 173880)
 * Test.assertEquals(squaresSum(81), 180441)
 * Test.assertEquals(squaresSum(82), 187165)
 * Test.assertEquals(squaresSum(83), 194054)
 * Test.assertEquals(squaresSum(84), 201110)
 * Test.assertEquals(squaresSum(85), 208335)
 * Test.assertEquals(squaresSum(86), 215731)
 * Test.assertEquals(squaresSum(87), 223300)
 * Test.assertEquals(squaresSum(88), 231044)
 * Test.assertEquals(squaresSum(89), 238965)
 * Test.assertEquals(squaresSum(90), 247065)
 * Test.assertEquals(squaresSum(91), 255346)
 * Test.assertEquals(squaresSum(92), 263810)
 * Test.assertEquals(squaresSum(93), 272459)
 * Test.assertEquals(squaresSum(94), 281295)
 * Test.assertEquals(squaresSum(95), 290320)
 * Test.assertEquals(squaresSum(96), 299536)
 * Test.assertEquals(squaresSum(97), 308945)
 * Test.assertEquals(squaresSum(98), 318549)
 * Test.assertEquals(squaresSum(99), 328350)
 * Test.assertEquals(squaresSum(100), 338350)
 * 
 * // made by @Joshua Señoron
 */

function squaresSum(length) {
	return Array.from({length}, (_, i) => i+1).reduce((acc, e) => e**2 + acc, 0)
}

// function squaresSum(n) {
// 	return Array.from({length: n}, (_, i) => i+1).reduce((acc, e) => e**2 + acc, 0)
// }
