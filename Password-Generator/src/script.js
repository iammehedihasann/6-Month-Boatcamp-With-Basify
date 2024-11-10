const RandomPassword = document.getElementById("inputBox");
const length = "12";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaase = "abcdefghijklmnopqrstuvwxyz";
const number = "abcdefghijklmnopqrstuvwxyz";
const symbol = "~!@#$%^&*(){}[]<>?/|-+*_";


let password = "";
const allChar = upperCase + lowercaase +number + symbol;
function createPassword(){
   password += upperCase[Math.floor(Math.random() * upperCase.length)];
   password += lowercaase[Math.floor(Math.random() * lowercaase.length)];
   password += number[Math.floor(Math.random() * number.length)];
   password += symbol[Math.floor(Math.random() * symbol.length)];

   while(length > password.length){
    password += allChar[Math.floor(Math.random() * allChar.length)];
   }
   RandomPassword.value = password;
}


// function copyPassword() {
//    navigator.clipboard.writeText(password)
//        .then(() => {
//            alert("Password copied to clipboard!");
//        })
//        .catch(err => {
//            console.error("Failed to copy password:", err);
//        });
// }

function passwordCopy() {
   navigator.clipboard.writeText(password)
   .then(()=>{
      alert("Password copied to clipboard");
   })
   .catch(err => {
      console.error("Failed to copy password: ", err);
   });
}