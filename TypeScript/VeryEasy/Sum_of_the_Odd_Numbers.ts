/**
 * Sum of the Odd Numbers
 * Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.
 * 
 * Examples
 * addOddToN(5) ➞ 9
 * // 1 + 3 + 5 = 9
 * 
 * addOddToN(13) ➞ 49
 * 
 * addOddToN(47) ➞ 576
 * Notes
 * Curiously, the answers are all square numbers!
 * 
 * Test.assertEquals(addOddToN(1), 1)
 * Test.assertEquals(addOddToN(3), 4)
 * Test.assertEquals(addOddToN(5), 9)
 * Test.assertEquals(addOddToN(7), 16)
 * Test.assertEquals(addOddToN(9), 25)
 * Test.assertEquals(addOddToN(11), 36)
 * Test.assertEquals(addOddToN(13), 49)
 * Test.assertEquals(addOddToN(15), 64)
 * Test.assertEquals(addOddToN(17), 81)
 * Test.assertEquals(addOddToN(19), 100)
 * Test.assertEquals(addOddToN(21), 121)
 * Test.assertEquals(addOddToN(23), 144)
 * Test.assertEquals(addOddToN(25), 169)
 * Test.assertEquals(addOddToN(27), 196)
 * Test.assertEquals(addOddToN(29), 225)
 * Test.assertEquals(addOddToN(31), 256)
 * Test.assertEquals(addOddToN(33), 289)
 * Test.assertEquals(addOddToN(35), 324)
 * Test.assertEquals(addOddToN(37), 361)
 * Test.assertEquals(addOddToN(39), 400)
 * Test.assertEquals(addOddToN(41), 441)
 * Test.assertEquals(addOddToN(43), 484)
 * Test.assertEquals(addOddToN(45), 529)
 * Test.assertEquals(addOddToN(47), 576)
 * Test.assertEquals(addOddToN(49), 625)
 * Test.assertEquals(addOddToN(51), 676)
 * Test.assertEquals(addOddToN(53), 729)
 * Test.assertEquals(addOddToN(55), 784)
 * Test.assertEquals(addOddToN(57), 841)
 * Test.assertEquals(addOddToN(59), 900)
 * Test.assertEquals(addOddToN(61), 961)
 * Test.assertEquals(addOddToN(63), 1024)
 * Test.assertEquals(addOddToN(65), 1089)
 * Test.assertEquals(addOddToN(67), 1156)
 * Test.assertEquals(addOddToN(69), 1225)
 * Test.assertEquals(addOddToN(71), 1296)
 * Test.assertEquals(addOddToN(73), 1369)
 * Test.assertEquals(addOddToN(75), 1444)
 * Test.assertEquals(addOddToN(77), 1521)
 * Test.assertEquals(addOddToN(79), 1600)
 * Test.assertEquals(addOddToN(81), 1681)
 * Test.assertEquals(addOddToN(83), 1764)
 * Test.assertEquals(addOddToN(85), 1849)
 * Test.assertEquals(addOddToN(87), 1936)
 * Test.assertEquals(addOddToN(89), 2025)
 * Test.assertEquals(addOddToN(91), 2116)
 * Test.assertEquals(addOddToN(93), 2209)
 * Test.assertEquals(addOddToN(95), 2304)
 * Test.assertEquals(addOddToN(97), 2401)
 * Test.assertEquals(addOddToN(99), 2500)
 * 
 * // Made by @Joshua Señoron
 */

function addOddToN(n: number) : number {
    return n === 1 ? 1 : addOddToN(n-2) + n;
}
