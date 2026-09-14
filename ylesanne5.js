let temp = 20
let username = "admin";
let ticketType = "taispilet";
let age = 20;


username === "admin" ? console.log("Tere, administraator!") : console.log("Tere, külaline!");

if (temp > 25) {
  console.log("Väga kuum ilm");
} else if (temp < 15) {
  console.log("Väga ja ilm");
} else {
  console.log("Mõnus temperatuur");
}


if (ticketType === "taispilet") {
  

  if (age < 18) {
    console.log("Hind 10 eurot");
  } else if (age >= 18 && age <= 64) {
    console.log("Hind 20 eurot");
  } else {
    console.log("Hind on 15 eurot");
  }

} else if (ticketType === "sooduspilet") {

  if (age < 18 || age >= 65) {
    console.log("Hind 8 eurot");
  } else {
    console.log("Hind 15 eurot");
  }

}