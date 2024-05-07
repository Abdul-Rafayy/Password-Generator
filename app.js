function generatePassword(){
    var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()_!abcdefghijklmnopqrstuvwxyz0123456789"
    var password = "";
    var userInput = prompt("Enter how many number of passwords you want")
    for (let i = 0; i < userInput; i++) {
        randomNum = Math.floor(Math.random()*char.length);
        password += char[randomNum]    
    }
    document.getElementById("password").value = password
}