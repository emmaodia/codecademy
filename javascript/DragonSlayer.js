var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!

/*This sets youHit to a random number that's either 0 (which JavaScript reads as false) or
1 (which JavaScript reads as true).*/
var youHit = Math.floor(Math.random() * 2);
//This sets damageThisRound to a random number that's between 1 and 5 (up to and including 5).
var damageThisRound = Math.floor(Math.random() * 5 + 1);

var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    /*you're telling JavaScript to add totalDamage and damageThisRound together, 
    then assign that new value to totalDamage.*/
    totalDamage += damageThisRound;

    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}
