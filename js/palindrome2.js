function isPalindrome(text) {
    var str = text.toLocaleLowerCase().split(/[^a-z]*/).join("");
    var strReverse = text.toLowerCase().split(/[^a-z]*/).reverse().join("");

if(str==strReverse) {
    return true
} else {
    return false
}
}
console.log(isPalindrome("Was it a cat I saw?"));
