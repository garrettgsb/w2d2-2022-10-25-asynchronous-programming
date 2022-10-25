function promiseVersion() {
  fetch('mywebsite.com/api/data')
  .then(data => data.json())
  .then(data => {
    console.log(data);
  });
}

async function asyncAwaitVersion() {
  const rawData = await fetch('mywebsite.com/api/data');
  const data = rawData.json();
  console.log(data);
}
