/*
we are trying to get a list of all the possible seating arrangements for the students. This is a basic permutation problem that is solved using backtracking.


*/

const testData = ["A", "B", "C", "D"];
function seatingCharts(students) {
  // used for quick accessing of students already in 'path'
  const studentSet = new Set(students);

  // stores the current path we are on
  const stack = [];
  
  // stores all the seating arrangements we find
  const result = [];

  // we will need a helper function in order to create a closure for the global function variables

  function helper() {
    if (stack.length === students.length) {
      result.push([...stack]);
      return;
    }

    for (const student of students) {
      if (studentSet.has(student)) {
        stack.push(student);
        studentSet.delete(student);
        console.log(stack);
        helper();
        stack.pop();
        studentSet.add(student);
      }
    }
  }
  helper();

  return result;
}

seatingCharts(testData);
// console.log(seatingCharts(testData))
