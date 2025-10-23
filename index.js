let code1;
code1 = 7 + 3;
const code2 = 60 - 40 / 2;
const code3 = 37 + (5 % 3);

const message = "The vault has been secured. The combination is:";
const codeA = code1 + "-" + code2 + "-" + code3;
const codeB = `${code1}-${code2}-${code3}`;

console.log(message);
console.log(codeA);
console.log(codeB);
