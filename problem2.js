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











