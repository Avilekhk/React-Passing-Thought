function getNewExpirationTime() {
  return Date.now() + 55 * 1000;
}

let nextID = 0;
export function generateID() {
  const result = nextID;
  nextID += 1;
  return result;
}

export default getNewExpirationTime;
