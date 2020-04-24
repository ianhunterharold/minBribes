// Complete the minimumBribes function below.
const minimumBribes = function(q) {
  let movement = 0;

  for (let i=0; i< q.length; i++){
    let originalPlace = q[i] - 1; // adjust for 0 based array
    if ( (originalPlace - i) > 2 ){
      return 'Too Chaotic';
    } else if ( (originalPlace - i) <= 2 && (originalPlace - i) > 0 ){
     
      let bribes = (originalPlace - i);
      movement = movement + bribes;
    }
  }
  return movement;
}
const test = [1,2,3,4,5,6,7,10,8,9];
minimumBribes(test)


 // orginal place - i > 2
    // big no no 
    // else its <= 2
      // count the movement the number of spaces 
      // ++ the

// q is an array of integers

// checking two things 

// if the queue line up is not possible return 'too chaotic' which means that the integer being checked is within two indexes of its original place 

// return the count of bribes needed for the queue to be as is 

// iterating through the array 
// looking to see if each value is within two from it's original spot 

// if move is valid, then count the difference in the number of steps 

