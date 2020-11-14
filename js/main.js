
function isPalindrome() {
    let usersWord = document.getElementById("palindrome").value;
    let result = document.getElementById("message");

    if(usersWord.includes(" ")) {
        result.style.backgroundColor = "orange";
        return(result.innerHTML = "You enter more than one word or number");
    }

    for(let i = 0; i <= usersWord/2; i++) {
        if(usersWord[i] !== usersWord[usersWord.length - 1 - i]) {
            result.style.backgroundColor = "red";
            return(result.innerHTML = "It isn't a palendrome");
        }
    }
    result.style.backgroundColor = "green";
    return(result.innerHTML = "Yes. It is a palendrome"); 

}
