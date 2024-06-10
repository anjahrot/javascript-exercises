const getAge = function (birth, death) {
    if(!death) {
        death = new Date().getFullYear();
     }
    return death - birth;
   };

const findTheOldest = function(array) {
    const oldest = array.sort(function (a,b){
         const lastAge = getAge(a.yearOfBirth, a.yearOfDeath);
         const nextAge = getAge(b.yearOfBirth, b.yearOfDeath);
         return lastAge > nextAge ? -1 : 1;
     });
    return oldest[0];
    }
    //return array.reduce((oldest,currentPerson) => {
    //    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    //    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

    //return oldestAge < currentAge ? currentPerson : oldest;
    //});
//};

// Do not edit below this line
module.exports = findTheOldest;
