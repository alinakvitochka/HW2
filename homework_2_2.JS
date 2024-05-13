undefined + 1;
// NaN
// when you try to perform arithmetic operations with undefined, it will be automatically converted to NaN.
// any arithmetic opeartion with NaN results in NaN

'true' == true
// false - boolean
// true can not be converted to number so it will be false 

false == 'false'
// false - boolean
// false can not be converted to number so it will be false 

null == ''
// false -- bolean
// null can not be converted to empty string 

3 ** (9 / 3);
// 27 number
// operation in parentheses has always higher prioriry


!!'false' == !!'true'
// true - boolean
// negating for non any non empty string result in true, double negation will result in false 
// false == false -> true


0 || '0' && 1
// 1 number
//  0 || '0' - will result in '0' becase first value is converted to false 
//  '0'  && 1 will result in 1 because in this operation '0' is converted to true since its non empty string 

1 < 2 < 3
// true - bolean
// 1 < 2 -> true
//  true < 3 -> true since true is converted to 1 and 1 is less then 3


'foo'+ + +'bar'
// 'fooNaN' - string
// ++'bar' -> NaN
// 'foo' + NaN -> 'fooNaN'

3 ** 2 / 3;
// 3 number
// 3 ** 2 -> 9
// 9 / 3 -> 3

1 < 2 > 3
// false - boolean
// 1 < 2 -> true
//  true > 3 -> false since true is converted to 1 and 1 is less then 3

(+null == false) < 1;
// false - boolean
//  +null -> 0, 0 == false -> true
// true < 1, is false since 0 < 1 is not right

false && true || true
// true - boolean
//  false && true -> false
//  false || true ->  true

false && (true || true);
// false - boolean 
// (true || true) -> true
// false && true - > false

(+null == false) < 1 ** 5;
// false - boolean
// (+null == false) ; +null -> 0, 0 == false -> true
// 1 ** 5 -> 1
// true < 1; 1 < 1 -> false 