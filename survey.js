const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {

};

rl.question('What is your name? Nicknames are also acceptable :)', (answer) => {
  console.log(`You're name: ${answer}`);
  profile.name = answer;
  rl.question('What\'s an activity you like doing?', (answer) => {
    console.log(`You're favourite activity: ${answer}`);
    profile.activity = answer;
    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`You like to listen to: ${answer}`);
      profile.listen = answer;
      rl.question('Which meal is your favourite? e.g. dinner, brunch, etc.', (answer) => {
        console.log(`You're favourite meal is: ${answer}`);
        profile.meal = answer;
        rl.close();
        console.log(profile);
      });
    });
  });
});





