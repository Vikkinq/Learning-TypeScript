// const name: string = "Symon";

// console.log("Hello", name);

// Explicit Return
function calculateTotal(price: number, quantity: number): number {
  return price + quantity;
}

// Implicit Returns
function userPrompt(say1: string, prompt: string) {
  return `${say1} & ${prompt}`;
}

function testingPrompt(g1: string, g2: string): void {
  console.log(`${g1} & ${g2}`);
}

console.log(calculateTotal(10, 50));
console.log(userPrompt("Tae", "Saur"));
