const REGEXP = /blue flag|red flag/g;

console.log("red flag blue flag".match(REGEXP));
console.log("yellow flag red flag blue flag green flag".match(REGEXP));
console.log("pink flag red flag black flag blue flag green flag red flag ".match(REGEXP));