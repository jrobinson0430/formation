/*
'''
You're working on a finance application and need to format monetary amounts in the following manner for accounting purposes. Every number must adhere to a strict set of rules:

1. All amounts are rounded to two decimal places, even if it is .00.
2. A $ precedes the first digit.
3. Thousands, millions, billions, etc have commas between every 3 digits from the left of the decimal.
4. Negative numbers are surrounded by parentheses.
5. If the absolute amount is less than 1, there should still be a zero before the '.'

Write a function that takes a numeric value and outputs the "finance formatted" string representation.

This is a very realistic data processing problem with lots of special cases!
 

EXAMPLE(S)
moneyFormat(1) == "$1.00"
moneyFormat(-1) == "($1.00)"
moneyFormat(16) == "$16.00"
moneyFormat(123) == "$123.00"
moneyFormat(.35) == "$0.35"

INPUT:
amount: integer value representing a dollar amount

OUTPUT:
formatted string specific to problem rules/guidelines

* for amounts less than 1, always have a leading 0
  .35 -> '$0.35'
 
0 -> $0.00
-1 ->  ($1.00)
1.5453 -> $1.55

1. determine if the input is positive or negative, store in boolean
2. perform a toFixed(2) on the number
3. if absolute value is between 0-.99, we know we need to add a leading zero (as a string)
4. add dollar sign to the lefthand side
5. if input is negative, add parenthesis as the last step


utilize the toFixed method, toLocaleString method 

FUNCTION SIGNATURE
function moneyFormat(amount) {
def moneyFormat(amount: float) -> str:
'''
*/

function moneyFormat(amount) { // 123456789
  const isNegative = amount < 0; // false
  let fixedString = Math.abs(amount).toFixed(2) // "123456789.00"

  let [wholeNumber, decimal] = fixedString.split('.'); // ['123456789', '00']


  for (let i = wholeNumber.length - 3; i > 0; i-= 3) { // 123456789  index: 5
    wholeNumber = wholeNumber.slice(0, i) + ',' + wholeNumber.slice(i);
  }


  fixedString = `$${wholeNumber}.${decimal}` // "$0.35"

  if (isNegative) {fixedString = `(${fixedString})`} // "($0.35)"



  return fixedString

}

// happy cases
console.log(moneyFormat(0) == "$0.00")
console.log(moneyFormat(1) == "$1.00")
console.log(moneyFormat(-1) == "($1.00)")
console.log(moneyFormat(16) == "$16.00")
console.log(moneyFormat(123) == "$123.00")

// decimal variants
console.log(moneyFormat(0.01) == "$0.01")
console.log(moneyFormat(.02) == "$0.02")
console.log(moneyFormat(.3) == "$0.30")
console.log(moneyFormat(0.0001) == "$0.00")
console.log(moneyFormat(4.954) == "$4.95")
console.log(moneyFormat(4.955) == "$4.96")
console.log(moneyFormat(4.) == "$4.00")

// comma variants
console.log(moneyFormat(1234) == "$1,234.00")
console.log(moneyFormat(1001.01) == "$1,001.01")
console.log(moneyFormat(50000) == "$50,000.00")
console.log(moneyFormat(6789123456789) == "$6,789,123,456,789.00") // 6.7 trillion

// negative variants
console.log(moneyFormat(-0.01) == "($0.01)")
console.log(moneyFormat(-.02) == "($0.02)")
console.log(moneyFormat(-0.001) == "($0.00)")
console.log(moneyFormat(-1000) == "($1,000.00)")

// complex variants
console.log(moneyFormat(-34567) == "($34,567.00)")
console.log(moneyFormat(-12345.67) == "($12,345.67)")
console.log(moneyFormat(-12345.678) == "($12,345.68)")

function moneyFormat(amount) {
  function padZeros(number, length) {
    const str = number + '';
    const neededZeros = length - str.length;
    return new Array(neededZeros).fill('0', 0, length - str.length).join('') + str;
  }

  // check if the final result needs parentheses
  const isNeg = amount < 0;
  amount = isNeg ? -amount : amount;

  // calculate the decimal portion
  amount = Math.round(amount * 100);
  const decimalPart = padZeros(amount % 100, 2);
  amount = Math.floor(amount / 100);

  // segment the integer into 3 digit portions for adding commas
  const parts = [];
  while (amount > 0) {
    const next = amount % 1000;
    parts.push(next);
    amount = Math.floor(amount / 1000);
  }
  parts.reverse();

  for (let i = 1; i < parts.length; i++) {
    parts[i] = padZeros(parts[i], 3);
  }

  // special case when the amount < 1
  if (parts.length === 0) {
    parts.push('0');
  }

  const digits = `$${parts.join(',')}.${decimalPart}`;

  return isNeg ? `(${digits})` : digits;
}