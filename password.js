const CharacterAmountnumber = document.getElementById 
('CharacterAmountnumber')  
const IncludeUppercaseElement = document.getElementById('IncludeUppercase') 
const includeNumbersElement = document.getElementById('IncludeNumberscase') 
const includeSymbolsElement = document.getElementById('IncludeSymbolscase')
const form = document.getElementById('generator')  
const passdisplay = document.getElementById('passdisplay')

const UpperCase_Char_Codes = arrayfromLowtoHigh(65,90) 
const LoweCase_Char_Codes = arrayfromLowtoHigh(97,122) 
const NumberCase_Char_Codes = arrayfromLowtoHigh(48,57) 
const SymbolCase_Char_Codes = arrayfromLowtoHigh(33,47).concat(arrayfromLowtoHigh(58,64)).concat(arrayfromLowtoHigh(91,96)).concat(arrayfromLowtoHigh(123,126)) 

CharacterAmountnumber.addEventListener('input',syncCharacterAmount)

form.addEventListener('submit',e =>{ 
    e.preventDefault() 
    const CharacterAmount = CharacterAmountnumber.checked
    const includeUppercase =IncludeUppercaseElement.checked 
    const IncludeNumbers = includeNumbersElement.checked 
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(CharacterAmount,includeUppercase, IncludeNumbers, includeSymbols)
    passdisplay.innerText = password
}) 

function generatePassword(CharacterAmount, includeNumbersElement, inculudeSymbols, includeUppercase){ 
    let charCodes = LoweCase_Char_Codes 
    if (includeUppercase) charCodes = charCodes.concat(UpperCase_Char_Codes)
    if (includeNumbercase) charCodes = charCodes.concat(NumberCase_Char_Codes) 
    if (includeSymbolscase) charCodes = charCodes.concat(SymbolCase_Char_Codes)  
    const passwordCharacters = [] 
    for (let i= 0; i< CharacterAmount; i++) {  
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    } 
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