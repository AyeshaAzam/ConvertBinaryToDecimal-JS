//create a function that converts binary to decimal
export function convert(arr) {
  //get the array and flip it, because array index are read from LEFT to RIGHT, but binary are calculated their indexes  from RIGHT to LEFT

  let binaryArray = []; // here we will have the flip() value
  let copyArray = [...arr];

  while (copyArray.length !== 0) {
    binaryArray.push(Number(copyArray.pop())); // 'Push' adds the number at the end  and unShift() adds in the begaining, POP() takeout number(release a vaue) from end
  }

  //recognise the 1's and add their decimal values
  let totalInDecimal = 0;
  for (let i = 0; i < binaryArray.length; i++) {
    const digit = binaryArray[i]; // the digit will contain either 1's or 0's
    if (digit === 1) {
      //calculate the decimal value
      totalInDecimal += Math.pow(2, i);
    } else if (digit !== 0) {
      // like if it 1110004 then 4 is not binary
      totalInDecimal = "Array is NOT Binary"; // totalInDecimal will be replace with this string text
      break;
    }
  }
  return totalInDecimal;
}

// call the function
// const result = convert([1, 0, 1, 0, 0, 1, 1]);
// console.log(result);

//note: to run this file just type node binary.js
// go to the src folder ---> cd src and type node binary.js
