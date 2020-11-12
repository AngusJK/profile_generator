const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question('What is your name? Nicknames are also acceptable :)', (answer) => {
  profile.name = answer;
  rl.question('What\'s an activity you like doing?', (answer) => {
    profile.activity = answer.toLowerCase();
    rl.question('What do you listen to while doing that?', (answer) => {
      profile.listen = answer;
      rl.question('Which meal is your favourite? e.g. dinner, brunch, etc.', (answer) => {
        profile.meal = answer.toLowerCase();
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          profile.food = answer.toLowerCase();
          rl.question('Which sport is your absolute favourite?', (answer) => {
            profile.sport = answer.toLowerCase();
            rl.question('What is your superpower?', (answer) => {
              profile.superpower = answer.toLowerCase();
              rl.close();
              console.log(`Your name is ${profile.name}. You like to listen to ${profile.listen} while ${profile.activity}. You like to eat ${profile.food} for ${profile.meal}. You're favourite sport is ${profile.sport} and your superpower is ${profile.superpower}. Aren't you just fucking special.`);
            });
          });
        });
      });
    });
  });
});




