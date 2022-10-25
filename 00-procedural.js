function assignPayee() {
  const totalBill = 83.50;
  const taxRate = 0.14;
  const diners = [
    "Alice",
    "Bob",
    "Carol",
    "Dean",
  ];
  const randomDiner = getRandomItem(diners);
  return `${randomDiner} will get the bill, which comes to ${totalBill * (1 + taxRate)}, plus the tip.`;
}

function getRandomIndex(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(assignPayee());

module.exports = {
  assignPayee,
}
