export function replaceUpperCaseToDash(str: string) {
    let correctStr = '';

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];

        if (isUpperCase(letter))
            correctStr += '-' + letter.toLowerCase();
        else 
            correctStr += letter;
    }

    return correctStr;
}

function isUpperCase(symbol: string) {
    return symbol.toUpperCase() === symbol;
}