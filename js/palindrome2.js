function isPalindrome(text) {
    var characters = "!@#$%^&*()_-+;:',. ";
    var str = text.toLowerCase();

    if(str.length < 2){
        return true;
    } else {
        if(characters.indexOf(str[0])>0) {

            return isPalindrome(str.substr(1,str.length - 1));

        } else if(characters.indexOf(str[str.length - 1])>0) {

      return isPalindrome(str.substr(0,str.length - 1));

        } else if(str[0]==str[str.length - 1]){

      return isPalindrome(str.substr(1,str.length - 2));

        } else {
            return false;
        }     
    }   
}
console.log(isPalindrome("Not New York, Roy went on."));
console.log(isPalindrome("A man, a plan a canal-Panama"));
console.log(isPalindrome("jkjlkjlkjgg"));
