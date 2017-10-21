
function reverseString(backwards) {
    reversedResult = "";
    for (var i = backwards.length - 1; i >= 0; i--) {
        reversedResult += backwards[i];
}

return reversedResult; 
}
 
console.log(reverseString("hello"));
