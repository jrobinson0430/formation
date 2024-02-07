/* https://leetcode.com/problems/numbers-with-same-consecutive-differences/description/
Given two integers n and k, return an array of all the integers of length n where the difference between every two consecutive digits is k. You may return the answer in any order.

Note that the integers should not have leading zeros. Integers as 02 and 043 are not allowed.
*/

// DFS solution
var numsSameConsecDiff = function (n, k) {
  const results = [];

  function dfs(number) {
    const lastNumber = number.at(-1);
    if (number.length == n) {
      results.push(number.join(""));
      return;
    }
    if (lastNumber + k < 10) {
      number.push(lastNumber + k);
      dfs(number);
      number.pop();
    }

    if (lastNumber - k >= 0 && k) {
      number.push(lastNumber - k);
      dfs(number);
      number.pop();
    }
  }

  for (let i = 1; i < 10; i++) {
    dfs([i]);
  }

  return results;
};

// backtracking solution
var numsSameConsecDiff = function (n, k) {
  let result = [];

  function backtrack(current = []) {
    const len = current.length;
    // this is the problem logic to ensure the difference between numbers == k
    if (len >= 2 && Math.abs(current[len - 1] - current[len - 2]) != k) return;

    if (len == n) {
      result.push(parseInt(current.join("")));
      return;
    }

    for (let i = 0; i < 10; i++) {
      if (len == 0 && i == 0) continue; // prevents leading zeros
      current.push(i);
      backtrack(current);
      current.pop();
    }
  }
  backtrack();
  return result;
};

// their solution
function numsSameConsecDiff(n, k) {
  const results = [];
  const digits = [];

  function toValue() {
    let value = 0;
    for (const d of digits) {
      value = value * 10 + d;
    }
    return value;
  }

  function dfs() {
    const lastDigit = digits[digits.length - 1];
    if (digits.length === n) {
      results.push(toValue());
      return;
    }
    if (lastDigit - k >= 0) {
      digits.push(lastDigit - k);
      dfs();
      digits.pop();
    }
    if (k != 0 && lastDigit + k <= 9) {
      digits.push(lastDigit + k);
      dfs();
      digits.pop();
    }
  }

  for (let i = 1; i <= 9; i++) {
    digits.push(i);
    dfs();
    digits.pop();
  }

  return results;
}