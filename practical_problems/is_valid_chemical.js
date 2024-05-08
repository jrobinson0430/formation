/*
'''
Chemical Equation Balancing

Check whether the string s is a balanced chemical equation. The equation represents a chemical reaction that changes matter from one form to another, and since matter cannot be destroyed, valid equations must be balanced. Matter is made of molecules, and molecules are made of atoms. A balanced equation means that both sides have the same number of every atom.

An atom is a string that starts with an uppercase English letter followed by some or no lowercase English letters. For example, "A" and "Abc" are 1 atom each, but "FG" is 2 atoms, "F" and "G", and "hello" is invalid.  A molecule is one or more atoms.

A molecule a string representing the concatenation of the atoms with each of their optional atom coefficients. The coefficient is a positive integer less than 1000 that indicates how many times the molecule or atom appears in the equation. For example, "Cu12" means there are 12 "Cu" atoms. "H2O" means there are 2 "H" atoms and 1 "O" atom. The coefficient of the "O" atoms is absent, meaning there's only 1 of that atom per molecule.

In an equation, a molecule can optionally be prefixed with a molecule coefficient that indicates the number of those molecules available. The chemical equation itself is then is a string in the following format: molecule (+ molecule)* = molecule (+ molecule)*, where " * " means it repeats 0+ times. For example, "A = B", "A = B + C", and "A + B + C = D + E + F" are chemical equations but "X + Y = ", "X = + Z" are not.



EXAMPLE(S)
For s = "2H2 + O2 = 2H2O", the output is True.
Left side: 4 * "H" and "2 * O"
Right side: 4 * "H" and "2 * O"

For s = "1000H2O = Au + Ag", the output is False.
Left side: 2000 * "H" and "1000 * O"
Right side: 1 * "Ag" and "1 * Au"
 

// initialize a map to track the left side atoms.
// seperate the left and right sides of the equation at the '=' sign
// seperate left/right side arrays at the '+' to get array of molecues only
// iterate over left side to populate over the map
  // use a while loop to have more control over the iterator
  // you must determine what/if the coefficient is
  // you must also determine what the element abbrievation is
    // can be 1 or 2 characters
    // must start with a capital letter
    // may have an additional lowercase letter
  // you must determine if the element has a subscript
  // add element to dictionary
    // key: element abbreviation
    // value: coefficient * subscript
  // do the same thing for the right side of the equation except decrement the value in the map
  // if atom is not in map at any point in this step, return false
  // return map.size === 0
*/

function is_balanced(str) {
  let atoms = new Map();
  const left = str.split("=").at(0).split("+");
  const right = str.split("=").at(1).split("+");

  // goes over each molecule in array
  for (let i = 0; i < left.length; i++) {
    parser(left.at(i).trim(), atoms);
  }

  for (let i = 0; i < right.length; i++) {
    parser(right.at(i).trim(), atoms, false);
  }

  // console.log(atoms)
  return atoms.size === 0;
  function parser(molecule, atomMap, build = true) {
    let coefficient = "";
    let j = 0;

    // this will get the coefficient if there is one
    while (j < molecule.length) {
      while (/\d/.test(molecule.at(j))) {
        coefficient += molecule.at(j);
        j++;
      }
      coefficient = coefficient ? parseInt(coefficient) : 1;

      let element = molecule.at(j);

      j++;
      // will build the element abbreviation
      while (j < molecule.length && /[a-z]/.test(molecule.at(j))) {
        element += molecule.at(j);
        j++;
      }

      // now check for subscript
      let count = "";

      while (j < molecule.length && /\d/.test(molecule.at(j))) {
        count += molecule.at(j);
        j++;
      }

      count = count ? parseInt(count) : 1;
      // multiply count and coefficient
      count *= coefficient;
      // add to dictionary
      if (build) {
        atomMap.set(element, (atomMap.get(element) | 0) + count);
      } else {
        const newCount = (atomMap.get(element) | 0) - count;

        if (newCount === 0) {
          atomMap.delete(element);
        } else {
          atomMap.set(element, newCount);
        }
      }
    }
  }
}

console.log(is_balanced("2H2O = 2H2O"), true);
console.log(is_balanced("2H2 + O2 = 2H2O"), true);
console.log(is_balanced("1000H2O = Au + Ag"), false);
console.log(is_balanced("H2O = H2O"), true);
console.log(is_balanced("2H2O2 = 2H2O + O2"), true);
console.log(is_balanced("NaCl = Na + Cl2"), false);
console.log(is_balanced("C6H12O6 + 6O2 = 6CO2 + 6H2O"), true);
console.log(is_balanced("12H2O = 12H2 + 6O2"), true);

function parse_molecule(molecule, counts) {
  console.log(molecule);
  let coefficient = 1;
  let i = 0;
  while (i < molecule.length) {
    if (/\d/.test(molecule[i])) {
      // for coefficient
      let digit = "";
      while (/\d/.test(molecule[i])) {
        digit += molecule[i];
        i += 1;
      }
      coefficient = parseInt(digit);
    } else {
      let element = molecule[i];
      i++;
      while (i < molecule.length && /[a-z]/.test(molecule[i])) {
        element += molecule[i];
        i++;
      }
      let count = "";
      while (i < molecule.length && /\d/.test(molecule[i])) {
        count += molecule[i];
        i++;
      }
      count = count ? parseInt(count) : 1;
      count *= coefficient;
      counts[element] = (counts[element] || 0) + count;
    }
  }
  return counts;
}

function parse_side(side) {
  const molecules = side.replace(/\s/g, "").split("+");
  let counts = {};
  for (let molecule of molecules) {
    counts = parse_molecule(molecule, counts);
  }
  console.log(counts);
  return counts;
}

function is_balanced2(s) {
  const [lhs, rhs] = s.split("=");
  const left_counts = parse_side(lhs);
  const right_counts = parse_side(rhs);
  return JSON.stringify(left_counts) === JSON.stringify(right_counts);
}
