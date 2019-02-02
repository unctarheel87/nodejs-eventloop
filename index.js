const fs = require('fs');

const start = Date.now();

function read() {
  fs.readFile('stuff.txt', 'utf8', () => {
    console.log('I read the file!')
  });
}

function longRead(dur) {
  fs.readFile('smallstuff.txt', 'utf8', () => {
    while(Date.now() - start < dur) {

    }
    console.log('I read the file after waiting!')
  });
}

setTimeout(() => {
  console.log('I am a timer!')
}, 2000);

read();
read();
read();
read();
longRead(5000);

setImmediate(() => {
  console.log('Where do I go?')
});



