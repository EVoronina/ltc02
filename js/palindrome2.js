function isPalindrome(text) {
    var str = text.toLowerCase().split(/[^a-z]*/).join("");
//     console.log(str);
    if(str.length >= 2){
//         console.log("str >=2");
        if(str[0]==str[str.length - 1]) {    
            return isPalindrome(str.substr(1,str.length - 2));
        } else {
            return false;
        }
    }else{
        return true;
    }
}
console.log(isPalindrome("Not New York, Roy went on"));
console.log(isPalindrome("A man, a plan a canal-Panama"));
console.log(isPalindrome("dfgdsfgsdfgs"));