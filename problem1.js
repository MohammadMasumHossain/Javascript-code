
function calculateVAT( price ) {
  
    if(isNaN(price) || price<=0 || typeof price !== 'number' ) {
        return "Invalid" ;
    }

    else{
        let vat=(price*7.5/100);
        return vat;
    }
    

}




function  validContact( contact ) {

    
   
    if(typeof contact !== "string"){
        return "Invalid";
    }

    if(contact.length=== 11 && contact.includes("") && contact.slice(0,2) == "01" ){
        for(let i=0; i<contact.length; i++){
            if(isNaN(contact[i])){
                return false;
            }
        }
        return true;
    }
    else 
    {
        return false;
    }
}





function  willSuccess( marks ) {

    if (!Array.isArray(marks)){
        return "invalid";
    }

    let pass=0;
    let fail=0;
    for (let val of marks){
        if (val>= 50){
            pass++;
        }
        else 
        {
            fail++;
        }
    }

    if(pass> fail){
        return true;
    }
    else {
        return false;
    }
 
}


function  validProposal( person1 , person2 ) {

    if (typeof person1 !== 'object' || person1 === null || Array.isArray(person1) || 
    typeof person2 !== 'object' || person2 === null || Array.isArray(person2)) 
    {
           return "Invalid";
    }

    if(person1.gender !== person2.gender && Math.abs((person1.age-person2.age)) <=7){
        return true;
    }
    else{
        return false;
    }
  
}


function calculateSleepTime(times) {
    
    for (let time of times) {
        if (typeof time !== 'number') {
            return "Invalid";
        }
    }

   let totalSeconds=0;
   for (let val of times){
    totalSeconds=totalSeconds+val;
   }

    
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

   
    return { hour: hours, minute: minutes, second: seconds };
}











