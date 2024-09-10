// problem 1 roman numerals

function romanNumerals(s) {
  let romanValues = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  let prev = 0;
  for (let i = 0; i < s.length; i++) {
    let currValue = romanValues[s[i]];

    if (prev < currValue) {
      total += currValue - 2 * prev;
    } else {
      total += currValue;
    }

    prev = currValue;
  }
  return total;
}

let s = "LVIII";
romanNumerals(s);
