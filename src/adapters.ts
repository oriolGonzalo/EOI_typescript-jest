export const countChars = (stringToFind: string = undefined, string: string = undefined): number => {
    if (stringToFind == undefined) throw new Error("stringToFind paramater is required");
    if (string == undefined) throw new Error("string paramater is required");
    if (string == '' || stringToFind == '') throw new Error("string and/or stringToFind paramater/s is/are empty");
    
    let count = 0;
    string?.split('').forEach(char => {
        if (char === stringToFind) {
            count++
        }
    })
    return count
}