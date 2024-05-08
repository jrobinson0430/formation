/*
Get all subsequences of a word
*/

const test1 = 'ABCD'

function print_subsequences(str, substring = "", i = 0) {
  if (i >= str.length) {
    console.log(substring);
    return;
  }
  // includes
  print_subsequences(str, substring + str[i], i + 1);

  // excludes
  print_subsequences(str, substring, i + 1);
}


function print_subs(str) {
  const result = [];

  function helper(sub = "", i = 0) {
    if (i === str.length) {
      result.push(sub);
      return;
    }

    helper(sub + str[i], i + 1);
    helper(sub, i + 1);
  }

  helper();
  return result;
}