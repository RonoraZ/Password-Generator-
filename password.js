const CharacterAmountnumber = document.getElementById 
('CharacterAmountnumber')  
const IncludeUppercaseElement = document.getElementById('IncludeUppercase') 
const IncludeNumbersElement = document.getElementById('IncludeNumberscase') 
console.log("IncludeNumbersElement", IncludeNumbersElement);
const IncludeSymbolsElement = document.getElementById('IncludeSymbolscase')
const form = document.getElementById('generator')  
const passdisplay = document.getElementById('passdisplay')

const UpperCase_Char_Codes = arrayfromLowtoHigh(65,90) 
const LoweCase_Char_Codes = arrayfromLowtoHigh(97,122) 
const NumberCase_Char_Codes = arrayfromLowtoHigh(48,57) 
const SymbolCase_Char_Codes = arrayfromLowtoHigh(33,47).concat(arrayfromLowtoHigh(58,64)).concat(arrayfromLowtoHigh(91,96)).concat(arrayfromLowtoHigh(123,126)) 

CharacterAmountnumber.addEventListener('input',syncCharacterAmount)

form.addEventListener('submit',e =>{ 
    e.preventDefault() 
    const CharacterAmount = CharacterAmountnumber.value
    console.log("characterAmount",CharacterAmount);
    const includeUppercase =IncludeUppercaseElement.checked 
    const includeNumbers = IncludeNumbersElement.checked  
    console.log("IncludeSymbolsElement",IncludeSymbolsElement);
    const includeSymbols = IncludeSymbolsElement.checked
    const password = generatePassword(CharacterAmount,includeUppercase, includeNumbers, includeSymbols)
    console.log("password",password);
    passdisplay.innerText = password
}) 

function generatePassword(characterAmount, includeUppercase,includeNumberscase, includeSymbolscase, ){ 

    let charCodes = LoweCase_Char_Codes 
    if (includeUppercase) charCodes = charCodes.concat(UpperCase_Char_Codes)
    if (includeNumberscase) charCodes = charCodes.concat(NumberCase_Char_Codes) 
    if (includeSymbolscase) charCodes = charCodes.concat(SymbolCase_Char_Codes)  
    const passwordCharacters = [] 
    console.log("characterAmount",characterAmount);
    for (let i= 0; i< characterAmount; i++) {  
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        console.log("characterCode",characterCode);
        passwordCharacters.push(String.fromCharCode(characterCode))
    } 
    console.log("passwordCharacters",passwordCharacters);
    return passwordCharacters.join('')
} 

function arrayfromLowtoHigh(low,high){ 
    const array = [] 
    for(let i= low; i <=high; i++){ 
        array.push(i) 
    } 
    return array
}

function syncCharacterAmount(e){ 
    const value = e.target.value 
    CharacterAmountnumber.value = value 
}