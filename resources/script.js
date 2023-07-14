let userName = "";
let helloUser = "";

userName ? helloUser = `Hello, ${userName}! \n`
  : helloUser = "Hello! \n";

console.log(helloUser);

const userQuestion = `Will I be torn apart by rabid badgers tonight?`;

userName ? console.log(`${userName} asked: ${userQuestion}`)
  : console.log(`You have asked: ${userQuestion}`);
console.log('\n')

let eightBallNumber = Math.ceil(Math.random()*8);

let eightBallPrediction = "";
switch (eightBallNumber) {
  case 1: eightBallPrediction = "It is certain."; break;
  case 2: eightBallPrediction = "It is decidedly so."; break;
  case 3: eightBallPrediction = "The results are hazy, try again."; break;
  case 4: eightBallPrediction = "It cannot be predicted now."; break;
  case 5: eightBallPrediction = "I would not count on it."; break;
  case 6: eightBallPrediction = "My sources say no."; break;
  case 7: eightBallPrediction = "The outlook seems unlikely."; break;
  case 8: eightBallPrediction = "Signs point to yes."; break;
}

console.log(`The Eight Ball is showing the number ${eightBallNumber} so... \n \n ${eightBallPrediction}`)
