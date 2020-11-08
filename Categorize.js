//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
//They would like your help with an application form that will tell prospective members which
//category they will be placed.

//To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
//In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

//Ex Input: [[18,20], [45,2], [61,12], [37,6], [21,21], [78,9]]
// >55, >7
//Ex Output: ["Open", "Open", "Senior","Open","Open","Senior"]

const openOrSenior=(data)=>{
    return data.map((info) => {
        if(info[0] >= 55 && info[1] > 7){
            return "Senior";
        } else{
            return "Open";
        }
    });
}

console.log(openOrSenior([[18,20],[45,2]]));