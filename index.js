function hasTargetSum(array, target) {
  const complements = new Set();

  for (let num of array) {
    const complement = target - num;

    if (complements.has(complement)) {
      return true;
    }
    complements.add(num);
  }
  return false;
}

/* 
  O(n)
*/

/* 
psuedo-code
*/

/*
 For each number in the array, it calculates the complement (target minus the current number) and checks if the complement exists in the set. 
 If it does, it returns true. Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
