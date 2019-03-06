function characterPositioning(string){
    var string = string.replace(/\s/g, '');
    var letters = {};
    for (var i = 0; i < string.length; i++){
        if (!letters[string[i]]){
            letters[string[i]] = i;
        } else{
            letters[string[i]] += ", " + i;
        }
    }
    return letters;
}

console.log(characterPositioning("lighthouse in the house"));
