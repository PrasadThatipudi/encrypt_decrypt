const charCodes = (text) => text.split("").map((char) => char.charCodeAt(0));

const inverseBit = (char) => String.fromCharCode(char.charCodeAt(0) | 128);

const encrypt = (text) => text.split("").map(inverseBit).join("");

const revertBit = (char) => String.fromCharCode(char.charCodeAt(0) & 127);

const decrypt = (text) => text.split("").map(revertBit).join("");
