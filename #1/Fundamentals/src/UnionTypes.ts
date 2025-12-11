export function UserId(id: string | number) {
  if (typeof id === "string") {
    const numberId = parseInt(id);
    return `The Converted User's ID is ${numberId}`;
  }

  return `The User's ID in Number is ${id}`;
}

const createId = UserId(5);
console.log(createId);
