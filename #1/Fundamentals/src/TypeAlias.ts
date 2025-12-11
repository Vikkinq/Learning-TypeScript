export type User = (name: string) => string;

function GreetCustomer(name: string) {
  return `Hello ${name}`;
}
