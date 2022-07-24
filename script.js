// 1 In below programe in anonymous function & IIFE
// a) Print oddd numbers in an array
function numbers(start, end) {
  let i = start%2 ? start : ++start;
  while(i <= end) {
      yield i;
      i += 2
  }
}

console.log([...numbers(1, 10)]);


// b) convert all the strings to tittle caps in a string array
const str = "foo bar baz";
const newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);


//c) sum of all numbers in an array
function sum(arr){
   var a= 0;
   for(var i=0; i<arr.length; i++){
       a = a+arr[i];
   }
   return a;
}

var returnedVal = sum([1,2,3,4,5]);
console.log(returnedVal);

//d) return all the prime numbers in an array
function sumPrimes(num) {
   //Produce an array containing all number of to and including num
   let numArray = [];
   for (let i = 1; i <= num; i++) {
     numArray.push(i);
   }
 
   //Remove non-prime numbers from the array     
   numArray.map((number) => {
     for (let i = 2; i < number; i++) {
         if(number % i === 0) {
             let index = numArray.indexOf(number);
             return numArray.splice(index, 1);       
         }
     }   
   });
 
  return numArray;
 
 }
 
 sumPrimes(10);

//  e) return all the palindromes in an array

function isPalinArray(arr, n)
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
     
    let arr = [ 121, 131, 20 ];
    // length of array
    let n = arr.length;
   
    let res = isPalinArray(arr, n);
    if (res == true)
        console,log("Array is a PalinArray");
    else
        console.log("Array is not a PalinArray");

// f.)Return median of two sorted arrays of same size
function getMedian(ar1, ar2, n)
        {
            var i = 0; /* Current index of i/p array ar1[] */
            var j = 0; /* Current index of i/p array ar2[] */
            var count;
            var m1 = -1, m2 = -1;
         
            /* Since there are 2n elements, median will be average
            of elements at index n-1 and n in the array obtained after
            merging ar1 and ar2 */
            for (count = 0; count <= n; count++)
            {
                /*Below is to handle case where all elements of ar1[] are
                smaller than smallest(or first) element of ar2[]*/
                if (i == n)
                {
                    m1 = m2;
                    m2 = ar2[0];
                    break;
                }
         
                /*Below is to handle case where all elements of ar2[] are
                smaller than smallest(or first) element of ar1[]*/
                else if (j == n)
                {
                    m1 = m2;
                    m2 = ar1[0];
                    break;
                }
                /* equals sign because if two
                    arrays have some common elements */
                if (ar1[i] <= ar2[j])
                {
                    m1 = m2; /* Store the prev median */
                    m2 = ar1[i];
                    i++;
                }
                else
                {
                    m1 = m2; /* Store the prev median */
                    m2 = ar2[j];
                    j++;
                }
            }
         
            return (m1 + m2)/2;
        }
         
        /* Driver program to test above function */
        var ar1 = [1, 12, 15, 26, 38];
        var ar2 = [2, 13, 17, 30, 45];
        var n1 = ar1.length;
        var n2 = ar2.length;
        if (n1 == n2)
            console.log("Median is "+ getMedian(ar1, ar2, n1));
        else
        console,log("Doesn't work for arrays of unequal size");


// g.) Remove duplicates from an array
        chars = ['A', 'B', 'A', 'C', 'B'];
        let uniqueChars = [...new Set(chars)];
        
        console.log(uniqueChars);

// h.) Rotate an array by k times

        let Array = [1, 2, 3, 4, 5];
        let N = Array.length;
        let K = k;
         
        Rotate(Array, N, K);



//4. Do the below programs in arrow functions
//a. Print odd numbers in an array
var array=[1,2,3,4,5,6,7,8,9,10];
//arrow function to filter odd numbers
var oddNumber=array.filter(num=>(num%2)!==0);
console.log(oddNumber)//[ 1, 3, 5, 7, 9 ]
//b. Convert all the strings to title caps in a string array
var array=["apple","bat","cat","dog"];
//arrow function to Convert all the strings to title caps
var titleCaps=array.map(word=>{
   var string = word[0].toUpperCase();
   for(var i=1;i<word.length;i++)string+=word[i].toLowerCase();
   return string;
    
});
console.log(titleCaps)//[ 'Apple', 'Bat', 'Cat', 'Dog' ]
//c. Sum of all numbers in an array
var array=[1,2,3,4,5,6,7,8,9,10];
//arrow function to find sum of all numbers in an array
var sumOfArray=array.reduce((a, b) => a + b);
console.log(sumOfArray)//55

//d. Return all the prime numbers in an array
var array=[1,2,3,4,5,6,7,8,9]
//arrow function to Return all the prime numbers from an array
var primeArray=prime((array)=>{
    var newArray=[];
    for(var n in array){
    for(var i=2;i<array[n];i++){
        var c=1;
        if(array[n]%i===0){c*=0;break}
        else c*=1;
    }
    if(c===1)newArray.push(array[n]);
    else if(array[n]===2)newArray.push(array[n]);
    }
    return newArray;
});
console.log(primeArray(array));

//e Return all the palindromes in an array

var array=["eye","apple","abba","guvi"];
//arrow function to filter palindrome
var palindromeArray=array.filter(str=>{
    var reverseStr=str.split("").reverse().join("");
    if(str===reverseStr)return str;});
console.log(palindromeArray)//[ 'eye', 'abba' ]



