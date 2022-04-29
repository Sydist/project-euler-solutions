// Time complexity O(1)
// Space complextiy O(1)

/**
 * @private
 * @param { number } _max 
 * @returns The sum of all positives numbers smaller than the input.
 */
const unitsSum = (_max) => _max * ++_max * 0.5

/**
 * @public
 * @param { number } _max 
 * @returns The sum of all multiples of 3 and 5 smaller than the input.
 */
module.exports = (_max) => { 
   return 3 * unitsSum(Math.floor(--_max / 3 )) + 
          5 * unitsSum(Math.floor(_max * 0.2 )) -
         15 * unitsSum(Math.floor(_max / 15));
}

