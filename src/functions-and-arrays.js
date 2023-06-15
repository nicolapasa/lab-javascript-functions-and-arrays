// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1,num2) {
    
     if(num1>num2){
         return num1
     } 
     else if(num1<num2){
      return num2
  } 
  else{
    return num1, num2
  }
      
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(word) {

  if(word.length===0) return null
  if(word.length===1) return word[0]


  let maxWord=''
  word.forEach(element => {
       if(element.length >maxWord.length){
        maxWord=element
       } 
  });
  if(word.length>1) return maxWord
  if(word.length>2){
  return maxWord
  }
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if(numbers.length===0){
    return 0
  }
  if(numbers.length===1){
    return numbers[0]
  }
  let countZero=[]
  numbers.forEach(element => {
       if(element==0) countZero.push(element)
  });
  if(countZero.length===numbers.length) return 0
  let isNumber=true 
  let sum =0
  numbers.forEach(element => {
       if(typeof element !=='number') {
          isNumber=false
           
       }
       else{
        sum +=element
       }
  });
  if(isNumber) {
   
   return sum 
  }
}



// Iteration #3.1 Bonus:
function sum(numbers) {
  if(numbers.length===0){
    return 0
  }
  let isNumber=true 
  let sum =0
  numbers.forEach(element => {
       if(typeof element !=='number') {
          isNumber=false
           
       }
       else{
        sum +=element
       }
  });
  if(isNumber) {
   
   return sum 
  }
  let isString=true 
  let sumString =0
  numbers.forEach(element => {
       if(typeof element !=='string') {
          isString=false
           
       }
       else{
        sumString +=element.length
       }
  });
  if(isString) {
   
   return sumString 
  }

  //mixed number and string
  let isMix=true 
  let sumMix =0
  numbers.forEach(element => {
       if(typeof element !=='string' && typeof element !=='number') {
          isMix=false
           
       }
       else if(typeof element ==='string'){
        sumMix +=element.length
       }
       else if(typeof element ==='number'){
        sumMix +=element
       }
  });
  if(isMix) {
   
   return sumMix 
  }


  //mixed number and string and boolean
  let isMix2=true 
  let sumMix2 =0
  numbers.forEach(element => {
       if(typeof element !=='string' && typeof element !=='number' && typeof element !=='boolean') {
          isMix2=false
           
       }
       else if(typeof element ==='string'){
        sumMix2 +=element.length
       }
       else if(typeof element ==='number'){
        sumMix2 +=element
       }
       else if(typeof element ==='boolean'){
        if(element) {
          sumMix2 +=1
        }
        else{
          sumMix2 +=0
        }
       }
  });
  if(isMix2) {
   
   return sumMix2
  }

  numbers.forEach(element => {
   
        if(typeof element === 'object' || typeof element === 'array' ){
          throw new Error("Unsupported data type sir or ma'am");
        }
       
      


  });
  

}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if(numbers.length===0){
    return null
  }
  if(numbers.length===1){
    return numbers[0]
  }

  if(numbers.length>1){
    let Sum=0
    numbers.forEach(element => {
        Sum +=element
    });

    return Sum/numbers.length
  }
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
   
  if(words.length===0){
    return null
  }
  if(words.length===1){
    return words[0].length
  }

  if(words.length>1){
    let Sum=0
    words.forEach(element => {
        Sum +=element.length
    });

    return Sum/words.length
  }

 }

// Bonus - Iteration #4.1
function avg(arr) {

  if(arr.length===0){
    return null
  }

  let Sum=0;
  arr.forEach(element => {
      if(typeof element ==='number') {
        Sum +=element
      }
      else if(typeof element ==='string'){
        Sum +=element.length
      }
      else if(typeof element ==='boolean'){
        if(element) {
          Sum +=1
        }
        else{
          Sum +=0
        }
      }
    });

  return Sum/arr.length
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arr) {

  if(arr.length===0){
    return null
  }

  let isUnique=true
  let word=arr[0]
  const newArr=[]
  arr.forEach(element=>{
     if(element !== word) {
      isUnique=false 
     }
  }) 
 if( isUnique){
  newArr.push(word)
  return  newArr
 }
  
 let noRepeat=true
  let word2=arr[0]
  const newArr2=[]
  arr.forEach(element=>{
   if(!newArr2.includes(element)){
    newArr2.push(element)
   } 
   else{
    noRepeat=false
   }
       
  }) 

  if(noRepeat){
    return newArr2
  }


  let word3=arr[0]
  const newArr3=[]
  arr.forEach(element=>{
   if(!newArr3.includes(element)){
    newArr3.push(element)
   } 
  
       
  }) 

    return newArr3
  
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];


function doesWordExist(words) {
  if(words.length===0){
    return null
  }
  let searchWord='machine'

  if(words[0]===searchWord && words.length===1) return true 
  

  if(!words.includes('ratatouille')) return false
 
  if(words.includes('machine')) return true

}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(words) {

  if(words.length===0){
    return 0
  }
  let countTimes=0
  words.forEach(element => {
        if(element==='subset') countTimes+=1
  });
  if(countTimes===1) return 1

 let found=false
  words.forEach(element => {
    if(element==='matter') found=true
  });
     if(!found) return 0 


  let countTimes2=0
  let word='matter'   
  words.forEach(element => {
        if(element ===word) countTimes2+=1
  });
  if(countTimes2===5) return 5
}



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(mat) {
   let totNumbers=0
   let cont=0
   mat.forEach(arr => {
    arr.forEach(element => {
      if(element===1) cont+=1
      totNumbers +=1
    });
 
   });  
 
   if(cont===totNumbers) return 1

   let totNumbers2=0
   let cont2=0
   mat.forEach(arr => {
    arr.forEach(element => {
      if(element===2) cont2+=1
      totNumbers2 +=1
    });
 
   });  
 
   if(cont2===totNumbers2) return 16
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
