console.log("hello");

// import { save, load, remove } from "./storage.js";

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return { completed, category, priority, ...data };
// }

// console.log(makeTask({}));
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });

// function add(...args) {
//   for (let item of args) {
//       return item +=;
//   }
//   // Change code above this line
// }

// console.log(add(74, 11, 62, 46, 12, 36));

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
// Change code below this line
// getPotions() {
//   return this.potions;
// },
// addPotion(newPotion) {
//   for (let item of this.potions) {
//     if (item.name === newPotion.name) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }
//   }
//   this.potions.push(newPotion);
// },
// removePotion(potionName) {
//   for (let item of this.potions) {
//     if (item.name === potionName) {
//       potionIndex = this.potions.indexOf(item);
//       console.log(potionIndex);
//       this.potions.splice(potionIndex, 1);
//     }
//   }
// const potionIndex = this.potions.indexOf(potionName);

// if (potionIndex === -1) {
//   return `Potion ${potionName} is not in inventory!`;
// }

// this.potions.splice(potionIndex, 1);
// },
// updatePotionName(oldName, newName) {
// const potionIndex = this.potions.indexOf(oldName);

// if (potionIndex === -1) {
//   return `Potion ${oldName} is not in inventory!`;
// }

// this.potions.splice(potionIndex, 1, newName);
// },
// Change code above this line
// };
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.potions);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(({ title }) => title);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((item) => books.genres);
// const uniqueGenres = allGenres;

// console.log(allGenres);

// const people = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(({ age }) => minAge < age && age < maxAge);
// };

// console.log(getUsersWithAge(people, 30, 40));

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, { playtime, gamesPlayed }) => (total += playtime / gamesPlayed),
//   0
// );

// console.log(totalAveragePlaytimePerGame);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const calculateTotalBalance = (users) => {
//   return users.reduce((total, { balance }) => (total += balance), 0);
// };

// console.log(calculateTotalBalance(users));

// const getTotalFriendCount = (users) => {
//   // const friendArr = users.flatMap(user => user.friends).filter((friend, idx, arr) => arr.indexOf(friend) )
//   return users.reduce((total, { friends }) => (total += friends.length), 0);
// };
// const sortByDescendingFriendCount = (users) => {
//   return [...users].sort(
//     ({ friends: first }, { friends: second }) => second.length - first.length
//   );
// };

// console.log(sortByDescendingFriendCount(users));

// const Josh = '{ "name": "Josh" }';

// const data = JSON.parse('{ "name": "Josh" }');
// console.log(data);

// try {
//   const data = JSON.parse('{username: "Mango"}');
// } catch (error) {
//   console.log("error.name :>> ", error.name); // "SyntaxError"
//   console.log("error.message :>> ", error.message); // "Unexpected token u in JSON at position 1"
//   console.log("error.stack :>> ", error.stack);
// }
// const data = JSON.parse('{username: "Mango"}');

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// console.log("savedSettings :>> ", savedSettings);
// const parsedSettings = JSON.parse(savedSettings);
// console.log("parsedSettings :>> ", parsedSettings);

// save, load, remove

// save("someKey", "someValue");
// console.log('load("someKey"); :>> ', load("someKey"));
// remove("someKey");
// console.log('load("someKey"); :>> ', load("someKey"));
