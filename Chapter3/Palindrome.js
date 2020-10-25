function checkPalindrome(strIn){
    var lowerStrIn = strIn.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    var inputLength = lowerStrIn.length;
    var strComp = "";
    if(lowerStrIn === ""){
        console.log("Nothing is Found!");
        return false;
    }

    if(lowerStrIn.length === 1){
        console.log("This input is a Palindrome");
        return true;
    }else{
        for(var i = inputLength-1; i >= 0; i--){
            strComp += lowerStrIn[i];
        }
        if(strComp === lowerStrIn){
            console.log("This input is a Palindrome");
            return true;
        }else{
            console.log("This input is not a Palindrome");
            return false;
        }
    }
}
checkPalindrome('ih');
checkPalindrome("madam");
checkPalindrome("nurses run");