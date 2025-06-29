const isCapla = true;
const isSpla = true;
const isSymbols = true;
const isNum = true;
const length = 8;

function passGen(length, isCapla, isSpla, isSymbols, isNum) {
    const cAplabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const sAplabets = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*";
    const numbers = "0123456789";

    let allowedChar = "";
    let password = "";

    allowedChar += isCapla ? cAplabets : "";
    allowedChar += isSpla ? sAplabets : "";
    allowedChar += isSymbols ? symbols : "";
    allowedChar += isNum ? numbers : "";

    if (allowedChar.length === 0) {
        console.log("Any set of the characters should be selected");
        return;
    } else if (length < 1) {
        console.log("Password should not be null");
        return;
    } else {
        for (let i = 0; i < length; i++) {
            let j = Math.floor(Math.random() * allowedChar.length);
            password += allowedChar[j];
        }
        const result = document.getElementById("result");
        result.textContent = password;
    }
}

const Btn = document.getElementById("btn");
Btn.addEventListener("click", () => {
    passGen(length, isCapla, isSpla, isSymbols, isNum);
});
