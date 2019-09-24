// pseudo coding for palindrome part 1
// this function evaluates
// Find out weather this is string is Palindrome or not
// initialize a variable
// find the length of the string
// iterate from the length - 1 of the string till 0th position
// Concatenate each character from the loop to the initiazed variable





let palindrome = (string) => {
  let userInput = string
  let reverse = ""
  for (let i=userInput.length -1; i>=0; i--){
    reverse = reverse + userInput[i]
  }
  if (reverse === userInput){
     console.log("This word " + userInput + " is a palindrome");

   } else {
     console.log("This word " + userInput + " is not a palindrome");
   }
  return reverse
}






// palindrome(noon);

 // console.log("this word" + palindrome)
 // console.log("this word" + userInput+ "is a palindrome")



palindrome("tom");



// Reverse the user input and store in a seperate variable
// Inialize a variable
// find the length of the string
// Iterate from the len-1 of the string til 0th position
 // Loop through each character from the iteration to the initialied variable
