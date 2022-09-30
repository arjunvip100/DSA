//Maximmum occuring character in the given string?\

//Hello World
//output=l

function getCharString(str){
    const map={};
    str.split("").forEach(element => {
        //console.log(element)
        map[element]=map[element]?map[element]+1:1;
    });
    console.log(map)
  
    //max occuring character
    let max=1;
    char=str[0];
    for(let k in map){
        //console.log(map[k])
        if(map[k]>max){
            max=map[k];
            char=k;
        }
    }
    return char;
}
const result=getCharString("Hello World");
console.log(result);

