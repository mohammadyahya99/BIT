function countVowels(string){
    const str=string.toLowerCase()
    const vowels=["a","e","i","o","u"]
    let count =0
    for (let letter of str) {
  if(vowels.includes(letter))
  count++
    }
    return count
    }
   console.log(countVowels("aabcde")); 