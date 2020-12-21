const greetings = ['Ciao Amigo,', 'Ciao,', 'Hi,', 'Hola,'];
const messages = ["You always pass failure on the way to success.", "You don't score until you score!", "No one is perfect - that's why pencils have erasers.", "Winning doesn't always mean being first, winning means you're doing better than you've done before.", "Once you replace negative thoughts with positive ones, you'll start having positive results.", "Positive thinking will let you do everything better than negative thinking will.", "The only time you fail is when you fall down and stay down.", "If opportunity doesn't knock, build a door, knock knock!", "Success is the sum of small efforts repeated day in and day out.", "Happiness is the only thing that multiples when you share it.", "Live life to the fullest and focus on the positive."];
const leaveGreetings = ['Farewell my friend.', 'Have a great day.', 'Cheerio.'];


const randomMessage = Math.floor(Math.random() * messages.length);
const randomLeaveGreeting = Math.floor(Math.random() * leaveGreetings.length);

const script = document.createElement("script");



// console.log(messages[randomMessage]);
// console.log(leaveGreetings[randomLeaveGreeting]);

let messageButton = document.getElementById('messageButton');
let messageArea = document.getElementById('messageArea');
let positiveMessage = document.getElementById('positiveMessage');
let leaveGreeting = document.getElementById('leaveGreeting');
let reset = document.getElementById('reset');


messageButton.hidden = false;
messageArea.hidden = true;
reset.hidden = true;

messageButton.onclick = function() {
    messageButton.hidden = true;
    messageArea.hidden = false;
    reset.hidden = false;

    positiveMessage.innerHTML = messages[randomMessage];
    leaveGreeting.innerHTML = leaveGreetings[randomLeaveGreeting];
}

reset.onclick = function() {
    messageButton.hidden = false;
    messageArea.hidden = true;
    reset.hidden = true;

    location.reload();
}

/*

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;

  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}



*/

