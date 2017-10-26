function isPalindrome(word){
    var letters = word.split('');
    var i = 0;
    var j = letters.length-1;

    while(i<=j){
        if(letters[i] != letters[j]){
            return false;
        }
        i++;
        j--;
    }

    return true;
}

function sum(a, b){
    if(b === 'undefined'){
        return function(b) { return a + b; }
    }
    return a+b;
}