// function pigLatin(translate) {
//     var result = "";
//     while (translate() === false) {
//         result += translate.slice(0,1);
//         translate = translate.slice(1);
//     }
// results += translate + "ay"
// }
// return result;



function letters(word) {
    return word.split('')
}

function pigLatinizeWord(word) {
    var chars = letters(word);
    return chars.slice(1).join('') + chars[0] + 'ay';
}

function pigLatinizeSentence(sentence) {
    return sentence.replace(/\w+/g, pigLatinizeWord)
}


console.log(pigLatinizeSentence("This sheeeet works perfectly!!"))


// function words(latinize) {
//     return separate.split('')
// }

// function pigWords(latinize) {
//     var extra = words(latinize);
//     return words.substring(1) + words.substring(0,1);   
// }

// function pigLatinTheSentence(sentence) {
//     return sentence.replace(/s+/g, pigWords)
// }

// console.log(pigLatinTheSentence("Did I fuckign do it yo?"))

    
//     result === false) {
//         consonants += str.slice(0,1);
//     for (var i = 0; i < result.length; i++) {
//     result = result[i] += translate.substring(1) + translate.substring(0,1);

//     }
//    return (result + "ay");
// }

// console.log(pigLatin("Hello there fuck yeah bro!"));


// 