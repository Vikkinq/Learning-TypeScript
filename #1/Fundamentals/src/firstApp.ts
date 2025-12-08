// const name: string = "Symon";

// console.log("Hello", name);

// Explicit Return
function calculateTotal(price: number, quantity: number): number {
  return price + quantity;
}

function userPrompt(say1: string, prompt: string) {
  return `${say1} & ${prompt}`;
}

console.log(calculateTotal(10, 50));
console.log(userPrompt("Tae", "Saur"));
