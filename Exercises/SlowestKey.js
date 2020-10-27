/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
   var newData = [];
   var indexes = [];
   for(var i = 0; i < releaseTimes.length; i++){
        if(i>0){
            newData[i] = (Math.abs(releaseTimes[i] - releaseTimes[i-1]));
        }else{
            newData[i] = (releaseTimes[i]);
        }
   }
   var firstName = "", bitch = " ", ah = " ";
   const maxVal = Math.max.apply(null, newData);
   for(var i = 0; i < newData.length; i++){
       if(newData[i] === maxVal){
           indexes.push(keysPressed.charAt(i));
       }
   }
   return indexes.reverse()[0];
};

releaseTimes = [12,23,36,46,62];
keysPressed = "spuda";
Output = "a";
console.log(slowestKey(releaseTimes, keysPressed));

releaseTimes = [9,29,49,50];
keysPressed = "cbcd";
Output =  "c";
console.log(slowestKey(releaseTimes, keysPressed));