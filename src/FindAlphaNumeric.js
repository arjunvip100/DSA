// Find elements with at least 1 alphabet & 1 num 
// I/P : [true,123,"str123","sone","ss12@#"]
// O/P: ["str123", "ss12@#"]

let input = [true,123,"str123","sone","ss123@#"]

function alphaNumeric(value)
{
        let hasAlpha = false;
        let hasNum = false;
        if(typeof(value) === "string")
        {
                value = value.toUpperCase()
                for(let i in value)
                {       
                        if(value.charCodeAt(i) > 47 && value.charCodeAt(i) < 58) //for Number
                                hasNum = true;
                        if(value.charCodeAt(i) > 64 && value.charCodeAt(i) < 91)    //for Text
                                hasAlpha = true;
                }
        }
        return hasAlpha && hasNum;
}

let result = input.filter(alphaNumeric) //filter creates the new array consisting of only those elements
                                        // that satisfy the condition checked by isPositive() function
console.log(result)