const fs = require('fs');

// fs.readFile(
//   '02-sleep.js',
//   { encoding: 'utf8' },
//   (err, contents) => console.log(err, contents)
// );

// fs.writeFile('some-file.txt', 'I am new file', (err) => {
//   console.log('d...done?', err);
// });

// read counter
fs.readFile(
  'counter',
  { encoding: 'utf8' },
  (err, currentValue) => {
    console.log('Current value:', err, currentValue)
    // add 1 to the counter value (write file)
    fs.writeFile('counter', String(Number(currentValue) + 1), (err) => {
      fs.readFile('counter', { encoding: 'utf8' }, (err, newValue) => {
        console.log('New value:', newValue);
      });
    });
  }
);

// read the new value of the counter
