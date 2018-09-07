//////Maps.js

const question = new Map();
question.set('question',
'what is the newest name for the latest version of Javascript?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES6');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct answer :D');
question.set(false, 'wrong answer :(');

console.log(question.get('question'));

question.delete(4);

//if(question.has(4)){
//  question.delete(4))
console.log('the value is here');
//}
//question.clear();
question.forEach((value, key) => console.log(`This is ${key} and it's
set to the ${value}`);

for (let [key, value] of question.entries((){

}
