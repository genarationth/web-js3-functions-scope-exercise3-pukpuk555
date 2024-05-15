//3.1

const cal = (cost) => {
  const fee = 3;
  const interestFee = 0.001;
  const totalInterestFee = cost * interestFee;
  const totalCost = cost + totalInterestFee + fee;
  return totalCost;
};

let cost = 2202022;

const totalPayment = cal(cost);
// console.log(totalPayment);

//3.2

// const age = (birthYear, present) => {
//   return present - birthYear;
// };

// const presentYear = 2023;
// // console.log(age(1997, 2023));
// const greetFriends = (friends) => {
//   const names = friends.map((friend) => friend.name);
//   console.log(`Welcome ${names.join(" ")}`);
// };

// const friends = [{ name: "F1" }, { name: "F2" }, { name: "F3" }];
// const friendsAge = [];
// friendsAge.push({ birthYear: 1900 }, { birthYear: 1950 }, { birthYear: 2000 });

// // console.log(friendsAge);
// // greetFriends(friends);

// const calculateAges = (friendsArray, presentYear) => {
//   for (let friend of friendsArray) {
//     friend.age = age(friend.birthYear, presentYear);
//   }
//   return friendsArray;
// };

// const friendsWithAges = calculateAges(friendsAge, presentYear);

// const greetFriends2 = (friends) => {
//   friends.forEach((friend) => {
//     console.log(`Welcome ${friend.name} ${friendsWithAges.age}.`);
//   });
// };

// greetFriends2(friends);
// console.log(friendsWithAges);

// 3.2
const greeting = (name1, name2, name3) =>
  `Welcome ${name1}, ${name2}, ${name3}`;
// console.log(greeting("AiNueng", "AiSong", "AiSaam"));

const age = (birthYear) => 2024 - birthYear;
// console.log(age(1900));

const greetingAge = (
  name1,
  birthYear_1,
  name2,
  birthYear_2,
  name3,
  birthYear_3
) =>
  `Welcome ${name1}, you are ${age(birthYear_1)}. 
  Welcome ${name2}, you are ${age(birthYear_2)}. 
  Welcome ${name3}, you are ${age(birthYear_3)}.`;
console.log(greetingAge("AiNueng", 1900, "AiSong", 1950, "AiSaam", 2000));

// challenge
function evaluateGrade(score) {
  switch (true) {
    case score === 11:
      console.log("Perfect");
      return true;
    case score > 8:
      console.log("Excellent");
      return true;
    case score >= 5:
      return true;
    default:
      return false;
  }
}

evaluateGrade(12);
