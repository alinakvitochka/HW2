'number' + 23 + 32
// "number2332"
// string + number = number is converted  to string and added to the end of the string
// This  operation is String 

41 + 1 + 'number'
// "42number" - String
// The first adds the numbers 41+1 then it concatenates this number 42 with the string 'number'

null + 1
// 1 - Number
// null  is coverted to zero and added to one

'five' + + 'two'
// 'fiveNaN'
// because of precending + before string it tries to convert it to number, 
// but since string does not contain parsable number it will be converted to NaN
//  'five' + NaN will be concationation operation 

2 && 7
// 7 - number
// The logical AND operator returns the second operand if the first operand is truthy.

+'40' + +'2';
// 42 - Number
// + before string will convert '40' and '2' to numbers and then adds those numbers

'10' - 5 === 6;
// false - Boolean
// First operator  is '-' it will try to convert '10' to number 
// '10' is converted to number 10-5=5 and 5===6 this is a comparison between two numbers

true + false
// 1
// True is converted to 1 and false is converted to zero

'4px' - 3
// NaN - number
// this is arithmentic operation but because of "px" in string it cant convert it to number resulting in NaN

'4' - 3
// 1 number
// string is converted to number because of minus sign 

'2' + 3 ** 2;
// "29" - string
// 1)  3 ** 2 == 9 since ** has higher priority then +
// 2)  '2' + 9 is string concatenation operation 

12 / '6'
// 2 - Number
// String '6' is converted into a  number because of the division operation

23 + 42 + 'number'
//'65number' string
//The first adds the numbers  23+42 =65 ,then it concatenates this number 65  with the string 'number'

'10' + (5 === 6);
//'10false' string
//The string '10' is concatenated with the result of the comparison (5===6)because + sign with strings, it joins them together.

'number' + 15 + 3
//'number153' string
//'number'is converted  to string and added to the end of the string
