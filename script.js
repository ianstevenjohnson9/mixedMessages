const greeting = ['Good morning', 'Good afternoon', 'Good evening'];
const message = ["You always pass failure on the way to success.", "No one is perfect - that's why pencils have erasers.", "Winning doesn't always mean being first. Winning means you're doing better than you've done before.", "Once you replace negative thoughts with positive ones, you'll start having positive results", "Positive thinking will let you do everything better than negative thinking will.", "The only time you fail is when you fall down and stay down.", "If opportunity doesn't knock, build a door, knock knock!", "Success is the sum of small efforts repeated day in and day out.", "Happiness is the only thing that multiples when you share it", "Live life to the fullest and focus on the positive."];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const jokes = [["Why do we tell actors to 'break a leg?'", "Because every play has a cast."], ["Helvetica and Times New Roman walks into a bar", "'Get out of here!' shouts the bartender, 'We don/'t serve your type."],["Yesterday I saw a guy spill all his scrabble letters on the road.", "I asked him, 'what/'s the word on the street?'"], ["How many times can you subtract 10 from 100?", "Once, the next time you would be subtracting 10 from 90."]];

let messageButton = document.getElementById("messageButton");
let greetingMessage = document.getElementById("greetingMessage");
let positiveMessage = document.getElementById("positiveMessage");
let exitMessage = document.getElementById("exitMessage");
let resetMessage = document.getElementById("resetMessage");
let jokeButton = document.getElementById("jokeButton");
let malfuncButton = document.getElementById("malfuncButton");
let iPromButton = document.getElementById("iPromButton");
let joke = document.getElementById("joke");
let resetJoke = document.getElementById("resetJoke");

// hidden elements
greetingMessage.hidden = true;
positiveMessage.hidden = true;
exitMessage.hidden = true;
resetMessage.hidden = true;
malfuncButton.hidden = true;
iPromButton.hidden = true;
joke.hidden = true;
resetJoke.hidden = true;


