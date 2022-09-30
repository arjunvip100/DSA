function longstringprefix(strs){
    // we are looping on 1st word that is only on "flower"
    for(let i=0; i<strs[0].length; i++){

        // we are looping on remaining words that is flow and flight
        for(let j=1; j<strs.length; j++){

            // agar flower ka i agar bakike word ke ith se match nhi kr rha hain toh 
            if(strs[0][i] !==strs [j][i]){
              
                // jaha pe match nhi kr rha hain waha pe ruk jana aur 0 (flower) ka i tak cut kr dena jo match ho rha hain utna 
                return strs[0].slice(0,i)
                
            }
        }
    }
    return strs[0]
}
console.log(longstringprefix(["flower","flow","flight"]))