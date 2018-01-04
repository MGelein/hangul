/**Object to hang all methods onto to prevent pollution of global namespace */
var hangul = {};

/**Saves all the hangul.tail consonants */
hangul.tails = {};
/**Saves all the hangul.vowels */
hangul.vowels = {};
/**Saves all the hangul.lead consonants */
hangul.leads = {};

/**
 * Utility function to save a certain jamo with a 
 * romanization under a certain index/key in a 
 * specified list
 */
hangul.addToList = function(list, index, jamo, roman){
    list[index] = {'jamo': jamo, 'roman': roman};
}

/**Create the hangul.leads list */
hangul.addToList(hangul.leads, 1, 'ㄱ', 'g');
hangul.addToList(hangul.leads, 2, 'ㄲ', 'kk');
hangul.addToList(hangul.leads, 3, 'ㄴ', 'n');
hangul.addToList(hangul.leads, 4, 'ㄷ', 'd');
hangul.addToList(hangul.leads, 5, 'ㄸ', 'tt');
hangul.addToList(hangul.leads, 6, 'ㄹ', 'r');
hangul.addToList(hangul.leads, 7, 'ㅁ', 'm');
hangul.addToList(hangul.leads, 8, 'ㅂ', 'b');
hangul.addToList(hangul.leads, 9, 'ㅃ', 'pp');
hangul.addToList(hangul.leads, 10, 'ㅅ', 's');
hangul.addToList(hangul.leads, 11, 'ㅆ', 'ss');
hangul.addToList(hangul.leads, 12, 'ㅇ', '');
hangul.addToList(hangul.leads, 13, 'ㅈ', 'j');
hangul.addToList(hangul.leads, 14, 'ㅉ', 'jj');
hangul.addToList(hangul.leads, 15, 'ㅊ', 'ch');
hangul.addToList(hangul.leads, 16, 'ㅋ', 'k');
hangul.addToList(hangul.leads, 17, 'ㅌ', 't');
hangul.addToList(hangul.leads, 18, 'ㅍ', 'p');
hangul.addToList(hangul.leads, 19, 'ㅎ', 'h');

/**Create the vowel list */
hangul.addToList(hangul.vowels, 1, 'ㅏ', 'a');
hangul.addToList(hangul.vowels, 2, 'ㅐ', 'ae');
hangul.addToList(hangul.vowels, 3, 'ㅑ', 'ya');
hangul.addToList(hangul.vowels, 4, 'ㅒ', 'yae');
hangul.addToList(hangul.vowels, 5, 'ㅓ', 'o');
hangul.addToList(hangul.vowels, 6, 'ㅔ', 'e');
hangul.addToList(hangul.vowels, 7, 'ㅕ', 'yeo');
hangul.addToList(hangul.vowels, 8, 'ㅖ', 'ye');
hangul.addToList(hangul.vowels, 9, 'ㅗ', 'o');
hangul.addToList(hangul.vowels, 10, 'ㅘ', 'wa');
hangul.addToList(hangul.vowels, 11, 'ㅙ', 'wae');
hangul.addToList(hangul.vowels, 12, 'ㅚ', 'oe');
hangul.addToList(hangul.vowels, 13, 'ㅛ', 'yo');
hangul.addToList(hangul.vowels, 14, 'ㅜ', 'u');
hangul.addToList(hangul.vowels, 15, 'ㅝ', 'weo');
hangul.addToList(hangul.vowels, 16, 'ㅞ', 'we');
hangul.addToList(hangul.vowels, 17, 'ㅟ', 'wi');
hangul.addToList(hangul.vowels, 18, 'ㅠ', 'yu');
hangul.addToList(hangul.vowels, 19, 'ㅡ', 'eu');
hangul.addToList(hangul.vowels, 20, 'ㅢ', 'ui');
hangul.addToList(hangul.vowels, 21, 'ㅣ', 'i');

/**Create the hangul.tails list */
hangul.addToList(hangul.tails, 1, 'ㄱ', 'k');
hangul.addToList(hangul.tails, 2, 'ㄲ', 'k');
hangul.addToList(hangul.tails, 3, 'ㄳ', 'gt');
hangul.addToList(hangul.tails, 4, 'ㄴ', 'n');
hangul.addToList(hangul.tails, 5, 'ㄵ', 'nt');
hangul.addToList(hangul.tails, 6, 'ㄶ', 'nh');
hangul.addToList(hangul.tails, 7, 'ㄷ', 't');
hangul.addToList(hangul.tails, 8, 'ㄹ', 'l');
hangul.addToList(hangul.tails, 9, 'ㄺ', 'lk');
hangul.addToList(hangul.tails, 10, 'ㄻ', 'lm');
hangul.addToList(hangul.tails, 11, 'ㄼ', 'lp');
hangul.addToList(hangul.tails, 12, 'ㄽ', 'lt');
hangul.addToList(hangul.tails, 13, 'ㄾ', 'lt');
hangul.addToList(hangul.tails, 14, 'ㄿ', 'lp');
hangul.addToList(hangul.tails, 15, 'ㅀ', 'lh');
hangul.addToList(hangul.tails, 16, 'ㅁ', 'm');
hangul.addToList(hangul.tails, 17, 'ㅂ', 'p');
hangul.addToList(hangul.tails, 18, 'ㅄ', 'bt');
hangul.addToList(hangul.tails, 19, 'ㅅ', 't');
hangul.addToList(hangul.tails, 20, 'ㅆ', 't');
hangul.addToList(hangul.tails, 21, 'ㅇ', 'ng');
hangul.addToList(hangul.tails, 22, 'ㅈ', 't');
hangul.addToList(hangul.tails, 23, 'ㅊ', 't');
hangul.addToList(hangul.tails, 24, 'ㅋ', 'k');
hangul.addToList(hangul.tails, 25, 'ㅌ', 't');
hangul.addToList(hangul.tails, 26, 'ㅍ', 'p');
hangul.addToList(hangul.tails, 27, 'ㅎ', 'h');

/**
 * Returns the modified Hangul code point (-44032)
 * @param {String} character string of length 1
 */
hangul.getModCodePoint = function(character){
    return character.charCodeAt(0) - 44032;
}

/**
 * Returns the index of the leda jamo in this hangul.
 * @param {Integer} modCodePoint 
 */
hangul.getLeadIndex = function(modCodePoint){
    return Math.floor(modCodePoint / 588) + 1;
}

/**
 * Returns the index of the vowel jamo in this hangul.
 * Uses the tailIndex for its calculations
 * @param {Integer} modCodePoint 
 * @param {Integer} tailIndex 
 */
hangul.getVowelIndex = function(modCodePoint, tailIndex){
    return ((modCodePoint - tailIndex) % 588) / 28 + 1;
}

/**
 * Returns the index of this hanguls tail jamo
 * @param {Integer} modCodePoint 
 */
hangul.getTailIndex = function(modCodePoint){
    return modCodePoint % 28;
}

/**
 * Returns an array of indices for the lookup tables of the jamo
 * @param {String} character string of length 1 
 */
hangul.getJamoIndeces = function(character){
    var modCP = hangul.getModCodePoint(character);
    var tail = hangul.getTailIndex(modCP);
    var vowel = hangul.getVowelIndex(modCP, tail);
    var lead = hangul.getLeadIndex(modCP);
    return [lead, vowel, tail];
}

/**
 * Returns an array of jamo roman pairs for this specified character
 * @param {String} character string of length 1 
 */
hangul.getJamoRomanPair = function(character){
    var indices = hangul.getJamoIndeces(character);
    var lead = hangul.leads[indices[0]];
    var vowel = hangul.vowels[indices[1]];
    var tail = hangul.tails[indices[2]];
    var result = [];
    //Only add none undefined values to this list
    if(lead) result.push(lead);
    if(vowel) result.push(vowel);
    if(tail) result.push(tail); 
    return result;
}

/**
 * Returns an array of jamo or romanization for the provided character
 * @param {String} character string of length 1 
 * @param {Boolean} romanization whether you want to return the romanized version of the hangul
 */
hangul.getJamo = function(character, romanization){
    var pairs = hangul.getJamoRomanPair(character);
    //If there are no pairs, this means it is not a hangul character
    if(pairs.length == 0) return [character];
    for(index in pairs){
        if(pairs[index]){//If it is not undefined
            pairs[index] = (!romanization) ? pairs[index].jamo : pairs[index].roman;
        }
    }
    return pairs;
}

/**
 * Decodes the specified string into either jamo or romanized version of
 * hangul
 * @param {String} string the string to decode
 * @param {Boolean} jamo should we return jamo (true) or return romanized(omitted || false)
 */
hangul.decode = function(string, jamo){
    var result = '';
    for(index in string){
        var roman = hangul.getJamo(string.substr(index, 1), !jamo).join('');
        result += roman;
    }
    return result;
}

/**
 * Returns the romanized version of this string of hangul
 * @param {String} string the string to romanize 
 */
hangul.romanize = function(string){
    return hangul.decode(string);
}

/**
 * Returns the separate parts of every hangul
 * @param {String} string the string to break up into jamo 
 */
hangul.jamo = function(string){
    return hangul.decode(string, true);
}