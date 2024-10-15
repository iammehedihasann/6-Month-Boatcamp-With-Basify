const clickMe = () => {
  const name = document.getElementById('f-name').value;
  const email = document.getElementById('e-mail').value;
  const password = document.getElementById('pass-word').value;
  const confirmPassword = document.getElementById('confirm-pass').value;
 
  let isValid = true;
  
//   Name varification 
        if(name ===""){
            alert("Enter Your Name!");
            isValid = false;
        }

//  Email Verification
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!email.match(emailPattern)) {
            alert("Enter a valid address");
        isValid = false;
        } else{
            console.log("Email is Correct");
        }
 
//  Password verification 
 
        if(password.length < 8) {
            alert("Password must be at least 8 character!");
            isValid = false;
        } else {
            console.log("Your password is correct")
        }

// confirmPassword verfication

        if(password !==confirmPassword){
            alert("Password do not match!")
            isValid = false;
        }

        if(isValid){
            alert("Submit SuccessFull")

            document.getElementById('f-name').value = "";
            document.getElementById('e-mail').value = "";
            document.getElementById('pass-word').value = "";
            document.getElementById('confirm-pass').value = "";
        }
    return isValid;
}