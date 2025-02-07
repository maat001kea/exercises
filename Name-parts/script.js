const str = "Peter Heronimous Lind";

const firstName = str.substring(str.indexOf(""), str.indexOf(" "));
console.log(firstName);
// Expected output: "fox"

const middleName = str.substring(str.indexOf(" "), str.lastIndexOf(" "));
console.log(middleName);
// Expected output: "fox"

const lastName = str.substring(str.lastIndexOf(" "));
console.log(lastName);
// Expected output: "fox"

console.log(firstName, middleName, lastName);
