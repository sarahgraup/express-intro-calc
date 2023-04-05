const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
const nums = [];
  for(let strNum of strNums){
    const num = Number(strNum);
    nums.push(num);
    if(isNaN(num)){
      throw new BadRequestError(`${num} is not a number`)
    }
  }
  return nums;
}


module.exports = { convertStrNums };