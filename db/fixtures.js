import { defaultStarships } from "./default_starships.js";
import { defaultUsers } from "./default_users.js";

export const starships = [...defaultStarships];

function random(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const usersFix = [...defaultUsers];

for (let i = 0; i < usersFix.length; i++) {
  usersFix[i].credits = random(10000000, 1000000);
  for (let n = 0; n < random(15, 5); n++) {
    usersFix[i].listings.push({ price: 1 });
  }
}

export const users = [...usersFix];
