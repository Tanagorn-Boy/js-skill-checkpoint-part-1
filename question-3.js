// Question #3

// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(userPassword) {
  let checkChar = 0;
  for (let i = 0; i < userPassword.length; i++) {
    checkChar = checkChar + 1;
  }

  if (checkChar < 6) {
    return "Weak";
  } else if (checkChar >= 6 && checkChar <= 10) {
    return "Medium";
  } else {
    return "Strong";
  }
}
let userPassword1 = "ssswnalWadqQ";
console.log(checkPasswordStrength(userPassword1));

let userPassword2 = "TechUp";
console.log(checkPasswordStrength(userPassword2));

let userPassword3 = "abcde";
console.log(checkPasswordStrength(userPassword3));
