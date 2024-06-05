 
//Use splice() instead of toSpliced() to overwrite the array
const removeFromArray = function(anArray, ...objectsToRemove){
    const normalArray = objectsToRemove;
    for(let i=0;i<normalArray.length;i++){
        for(let j=0;j<anArray.length;j++){
          //Checks if array contains this value (indexOf returns -1 if it does not have it), 
          //only if it does will it be removed (splice(-1,1) would delete last item which is not what we want...) 
          if(anArray.indexOf(normalArray[i]) !== -1){
            anArray.splice(anArray.indexOf(normalArray[i],j),1);
       }
     }
    }
    return anArray;
}

// Do not edit below this line
module.exports = removeFromArray;
