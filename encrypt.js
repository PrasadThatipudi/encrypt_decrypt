const stringMap = (string, mapper) => string.split("").map(mapper).join("");

const inverseBit = (char) => String.fromCharCode(char.charCodeAt(0) | 128);
const revertBit = (char) => String.fromCharCode(char.charCodeAt(0) & 127);

const encrypt = (text) => stringMap(text, inverseBit);
const decrypt = (text) => stringMap(text, revertBit);
