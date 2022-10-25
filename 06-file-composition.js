const fs = require('fs');

// Run this five times... Notice any difference?
fs.readFile('./female-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => loadNames('fNames', JSON.parse(data)));
fs.readFile('./male-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => loadNames('mNames', JSON.parse(data)));
fs.readFile('./1000-most-common-surnames.txt', { encoding: 'utf8' }, (err, data) => loadNames('surnames', data.split(',\n')));

const names = {
  mNames: undefined,
  fNames: undefined,
  surnames: undefined,
}

function loadNames(key, data) {
  names[key] = data;
  if (Object.values(names).includes(undefined)) return;
  generateName();
  generateName();
  generateName();
  generateName();
  generateName();
}

function generateName() {
  const firstNameListKey = `${Math.random() > 0.5 ? 'm' : 'f'}Names`;
  const firstNameIdx = Math.floor(Math.random() * names[firstNameListKey].length);
  const surnameIdx = Math.floor(Math.random() * names.surnames.length);
  console.log(`${names[firstNameListKey][firstNameIdx]} ${names.surnames[surnameIdx]}`);
}

Promise.all([
  fs.readFile('./female-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => loadNames('fNames', JSON.parse(data))),
  fs.readFile('./male-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => loadNames('mNames', JSON.parse(data))),
  fs.readFile('./1000-most-common-surnames.txt', { encoding: 'utf8' }, (err, data) => loadNames('surnames', data.split(',\n'))),
]).then(([ mNames, fNames, surnames]) => {
  const names = {
    mNames,
    fNames,
    surnames,
  }
  generateName();
})
