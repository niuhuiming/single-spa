// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {}

export function logMsg(params) {
  console.log(`The message utils received was ${params}`);
  return `Utils's return message is ${params}`;
}